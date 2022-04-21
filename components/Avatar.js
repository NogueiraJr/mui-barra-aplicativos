import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { common } from '@mui/material/colors';
import Typography from '@mui/material/Typography';

export default function ImageAvatar() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="10vh"
        >
            <Stack direction="row" spacing={2}>
                <Avatar
                    sx={{ width: 42, height: 42, bgcolor: common.black }}
                    alt="Avatar">
                    <AccountCircleIcon sx={{ width: 40, height: 40 }} />
                </Avatar>
                <Typography gutterBottom variant="h7" component="div">
                    Usuário
                </Typography>
            </Stack>
        </Box>
    );
}
