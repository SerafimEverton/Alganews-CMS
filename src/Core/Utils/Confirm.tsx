import { confirmAlert } from "react-confirm-alert";
import Confirm from "../../app/components/Confirm/Confirm";
import 'react-confirm-alert/src/react-confirm-alert.css';

interface ConfirmProps {
    title: string
    onConfirm?: () => any
    onCancel?: () => any
  }
  
  export default function confirm (props: ConfirmProps) {
    confirmAlert({
      overlayClassName: 'confirm-overlay',
      customUI: ({ onClose }) => {
        return (
          <Confirm
            title={props.title}
            onConfirm={() => {
              if (props.onConfirm)
                props.onConfirm()
              onClose()
            }}
            onCancel={() => {
              if (props.onCancel)
                props.onCancel()
              onClose()
            }}
          />
        );
      }
    });
  }