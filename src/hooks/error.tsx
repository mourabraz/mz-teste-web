import React, { createContext, useCallback, useState, useContext } from 'react';

interface ErrorContextData {
  visible: boolean;
  title: string;
  messages: string[];
  setVisible(visible: boolean): void;
  setTitle(title: string): void;
  setMessages(messages: string[]): void;
  child: React.ReactElement | null;
  setChild(child: React.ReactElement | null): void;
  clear(): void;
}

const ErrorContext = createContext<ErrorContextData>({} as ErrorContextData);

const ErrorProvider: React.FC = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);
  const [child, setChild] = useState<React.ReactElement | null>(null);

  const clear = useCallback(() => {
    setVisible(false);
    setTitle('');
    setMessages([]);
    setChild(null);
  }, []);

  return (
    <ErrorContext.Provider
      value={{
        visible,
        title,
        messages,
        setVisible,
        setTitle,
        setMessages,
        child,
        setChild,
        clear,
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};

function useError(): ErrorContextData {
  const context = useContext(ErrorContext);

  if (!context) {
    throw new Error('useError must be within an ErrorProvider');
  }

  return context;
}

export { ErrorProvider, useError };
