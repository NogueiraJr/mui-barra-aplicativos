import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function ProdutoCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Produtos
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Total de Produtos: 249
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Em falta no estoque: 23
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Próximo do vencimento: 12
        </Typography>
        <Typography variant="body2">
          Nenhum Produto Inativo
          <br />
          {'"situação normal"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Cadastro</Button>
        <Button size="small">Estatísticas</Button>
        <Button size="small">Relatório</Button>
      </CardActions>
    </Card>
  );
}
