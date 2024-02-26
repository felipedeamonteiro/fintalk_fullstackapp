'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useModal } from '@/hooks/use-modal-store';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Check, Copy, RefreshCw } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';
import { ServerWithMembersWithProfiles } from '@/types';

export const MembersModal = () => {
  const { isOpen, onClose, type, data, onOpen } = useModal();

  const isModalOpen = isOpen && type === 'members';
  //nice fix for typo in typescript
  const { server } = data as { server: ServerWithMembersWithProfiles };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className='bg-white text-black p-0 overflow-hidden'>
        <DialogHeader className='pt-8 px-6'>
          <DialogTitle className='text-2xl text-center font-bold'>
            Manage Members
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className='text-center text-zinc-500'>
          {server?.members?.length} Members
        </DialogDescription>
        <div className='p-6'>Hello Members</div>
      </DialogContent>
    </Dialog>
  );
};
