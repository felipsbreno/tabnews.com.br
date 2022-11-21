import { Box, Button } from '@primer/react';
import { FiCopy } from 'react-icons/fi';

export default function SharePost({ objectContent }) {
  const msgToCopy = `${objectContent.title}. Essa notícia saiu no TabNews (e você ganha TabCoins comentando lá): https://www.tabnews.com.br/${objectContent.owner_username}/${objectContent.slug}`;

  function copyPost() {
    return navigator.clipboard.writeText(msgToCopy);
  }

  return (
    <Box>
      {objectContent.title !== null && (
        <Button leadingIcon={FiCopy} size="small" onClick={copyPost}>
          Copiar post
        </Button>
      )}
    </Box>
  );
}
