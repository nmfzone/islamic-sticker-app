"use client";

import { Download, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface InstallDialogProps {
  readonly packTitle: string;
}

export function InstallDialog({ packTitle }: InstallDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="icon"
          aria-label={`Install ${packTitle} sticker pack`}
          title={`Install ${packTitle}`}
          className="size-12 shrink-0"
        >
          <Download className="size-5" aria-hidden="true" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div className="grid size-12 place-items-center rounded-xl bg-secondary text-primary">
          <Smartphone className="size-6" aria-hidden="true" />
        </div>
        <DialogHeader>
          <DialogTitle>Coming soon</DialogTitle>
          <DialogDescription>
            WhatsApp and Telegram installation for {packTitle} will be available through future
            Islamic Sticker mobile apps.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button">Got it</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
