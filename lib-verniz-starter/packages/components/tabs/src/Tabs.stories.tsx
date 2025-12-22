import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Conta</TabsTrigger>
        <TabsTrigger value="tab2">Senha</TabsTrigger>
        <TabsTrigger value="tab3">Notificações</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="p-4 border rounded-md">
          <h3 className="font-medium mb-2">Configurações da Conta</h3>
          <p className="text-sm text-muted-foreground">
            Gerencie suas informações de perfil e preferências.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="p-4 border rounded-md">
          <h3 className="font-medium mb-2">Segurança</h3>
          <p className="text-sm text-muted-foreground">
            Altere sua senha e configure autenticação de dois fatores.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="p-4 border rounded-md">
          <h3 className="font-medium mb-2">Preferências de Notificação</h3>
          <p className="text-sm text-muted-foreground">
            Escolha como deseja receber atualizações.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Ativo</TabsTrigger>
        <TabsTrigger value="tab2" disabled>Desabilitado</TabsTrigger>
        <TabsTrigger value="tab3">Ativo</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Conteúdo da primeira aba</TabsContent>
      <TabsContent value="tab2">Conteúdo da segunda aba</TabsContent>
      <TabsContent value="tab3">Conteúdo da terceira aba</TabsContent>
    </Tabs>
  ),
};

