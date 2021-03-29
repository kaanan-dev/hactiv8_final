import { notification } from 'antd';


export const ErrorAction= {
    setError : (error) => {
        notification.error({
            message: `Error`,
            description:
              error,
            placement:'bottomRight',
            duration:2,
          });
    }
}