import { toast } from 'react-toastify';

class Toaster {
    
    constructor(position = toast.POSITION.BOTTOM_RIGHT, autoCloseMs = 7000) {
        toast.configure({
            autoClose: autoCloseMs,
            draggable: false,
            position
        });
    }

    success = (message= "Success Notification !") => {
        toast.success(message);
    }

    error = (message= "Error Notification !") => {
        toast.error(message);
    }

    info = (message= "Warning Notification !") => {
        toast.info(message);
    }

    warn = (message = "Info Notification !") => {
        toast.warn(message);
    }

    
}

const ToasterInstance = new Toaster();

export default ToasterInstance;