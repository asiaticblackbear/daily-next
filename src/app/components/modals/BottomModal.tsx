import React from 'react';
import {Modal, Paper, Slide} from '@mui/material';
import {useRouter} from "next/router";
import styled from "styled-components";

interface BottomModalProp{
    open: boolean,
    onClose: () => void,
    submit: any
}

const BottomModal = ({ open, onClose, submit }: BottomModalProp) => {
    const router = useRouter();
    const onConfrim = ()=> {
        /*closed and running func*/
        onClose

    }

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="bottom-modal"
            aria-describedby="bottom-modal-description"
            sx={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
            }}
        >
            <Slide direction="up" in={open} mountOnEnter unmountOnExit>
                <div
                    style={{
                        borderRadius: '16px 16px 0 0', // 상단 둥글게 만들기
                        backgroundColor: 'white',
                        padding: 16,
                        width: '100%',
                        maxWidth: 430,
                    }}
                >
                </div>
            </Slide>
        </Modal>
    );
};

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Paper 컴포넌트를 스타일링한 컴포넌트
const StyledPaper = styled(Paper)`
  && {
    max-width: 400px; /* 최대 가로폭 설정 */
    padding: 20px; /* 내부 여백 설정 */
  }
`;

export default BottomModal;