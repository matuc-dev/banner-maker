import { Button } from '@/components/ui/button'
import React, { RefObject } from 'react'
import { DownloadIcon } from 'lucide-react'
import { ModeToggle } from './theme/mode-trigger'
import { toPng } from 'html-to-image';

export const Toolbar = ({
  target
}: {
  target: RefObject<HTMLDivElement>
}) => {

  const downloadImage = async () => {
    const link = document.createElement('a');
    link.download = 'banner.png';
    link.href = await toPng(target.current!, { quality: 1, pixelRatio: 10 });
    link.click();
  };

  return (
    <>
      <div className="flex gap-3">
        <Button onClick={downloadImage} className='dark:bg-black' variant={'outline'} size={'icon'}><DownloadIcon size={17} /></Button>
        <ModeToggle />
      </div>
    </>
  )
}
