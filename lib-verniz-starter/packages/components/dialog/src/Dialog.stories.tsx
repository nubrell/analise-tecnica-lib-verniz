import type { Meta, StoryObj } from '@storybook/react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './Dialog';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground">
          Abrir Dialog
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Título do Dialog</DialogTitle>
          <DialogDescription>
            Esta é uma descrição do dialog. Você pode adicionar qualquer conteúdo aqui.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm">Conteúdo principal do dialog.</p>
        </div>
        <DialogFooter>
          <button className="px-4 py-2 rounded-md border">Cancelar</button>
          <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground">
            Confirmar
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground">
          Editar Perfil
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Perfil</DialogTitle>
          <DialogDescription>
            Faça alterações em seu perfil aqui. Clique em salvar quando terminar.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">Nome</label>
            <input
              id="name"
              defaultValue="João Silva"
              className="h-9 w-full rounded-md border px-3"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              defaultValue="joao@example.com"
              className="h-9 w-full rounded-md border px-3"
            />
          </div>
        </div>
        <DialogFooter>
          <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground">
            Salvar alterações
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

