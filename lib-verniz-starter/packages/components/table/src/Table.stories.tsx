import type { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>Lista de produtos</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Produto</TableHead>
          <TableHead>Preço</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Notebook</TableCell>
          <TableCell>R$ 3.500,00</TableCell>
          <TableCell>Em estoque</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mouse</TableCell>
          <TableCell>R$ 50,00</TableCell>
          <TableCell>Em estoque</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Teclado</TableCell>
          <TableCell>R$ 200,00</TableCell>
          <TableCell>Esgotado</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const WithSelection: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-12">
            <input type="checkbox" role="checkbox" />
          </TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Função</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <input type="checkbox" role="checkbox" />
          </TableCell>
          <TableCell>João Silva</TableCell>
          <TableCell>joao@example.com</TableCell>
          <TableCell>Desenvolvedor</TableCell>
        </TableRow>
        <TableRow data-state="selected">
          <TableCell>
            <input type="checkbox" role="checkbox" checked />
          </TableCell>
          <TableCell>Maria Santos</TableCell>
          <TableCell>maria@example.com</TableCell>
          <TableCell>Designer</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

