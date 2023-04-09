import React, {FC, ReactNode} from 'react';

interface Props {
  type: 'button' | 'submit';
  children: string | ReactNode;
}
const SmallButton: FC<Props> = ({type, children}) => {
  return (
    <>
     <button type={type} className={'bg-[#FF0000] text-white p-1 rounded-md hover:bg-[#5d9e5f]'}>
       {children}
     </button>
    </>
  );
};

export { SmallButton };
