import { ChatHeader } from '@/components/chat/chat-header';
import { ChatInput } from '@/components/chat/chat-input';
import { ChatMessages } from '@/components/chat/chat-messages';
import { MediaRoom } from '@/components/media-room';
import { getOrCreateConversation } from '@/lib/conversation';
import { currentProfile } from '@/lib/current-profile';
import { db } from '@/lib/db';
import { redirectToSignIn } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

interface MemberIdPageProps {
  params: {
    memberId: string;
    serverId: string;
  };
  searchParams: {
    video?: boolean;
  };
}

const MemberIdPage = async ({ params, searchParams }: MemberIdPageProps) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  const currentMember = await db.member.findFirst({
    where: {
      serverId: params.serverId,
      profileId: profile.id,
    },
    include: {
      profile: true,
    },
  });

  if (!currentMember) {
    return redirect('/');
  }

  const conversation = await getOrCreateConversation(
    currentMember.id,
    params.memberId
  );

  if (!conversation) {
    return redirect(`/servers/${params.serverId}`);
  }

  const { memberOne, memberTwo } = conversation;

  const otherMember =
    memberOne.profileId === profile.id ? memberTwo : memberOne;

  return (
    <div className='bg-white dark:bg-[#313338] flex flex-col h-full'>
      <ChatHeader
        name={otherMember.profile.name}
        serverId={params.serverId}
        type='conversation'
        imageUrl={otherMember.profile.imageUrl}
      />
      {searchParams.video && (
        <MediaRoom chatId={conversation.id} video={true} audio={true} />
      )}
      {!searchParams.video && (
        <>
          <ChatMessages
            apiUrl='/api/direct-messages'
            chatId={conversation.id}
            member={currentMember}
            name={otherMember.profile.name}
            paramKey='conversationId'
            paramValue={conversation.id}
            socketQuery={{
              conversationId: conversation.id,
            }}
            socketUrl='/api/socket/direct-messages'
            type='conversation'
          />
          <ChatInput
            apiUrl='/api/socket/direct-messages'
            name={otherMember.profile.name}
            query={{
              conversationId: conversation.id,
            }}
            type='conversation'
          />
        </>
      )}
    </div>
  );
};

export default MemberIdPage;
