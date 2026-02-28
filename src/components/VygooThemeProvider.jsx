import React from 'react';
import { ConfigProvider } from 'antd';

/**
 * VygooThemeProvider centralizes the global Ant Design theme configuration.
 * It ensures consistent branding (colors, radius, typography) across the app.
 */
export const VygooThemeProvider = ({ children }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#1677ff', // Vibrant blue primary color
                    borderRadius: 12,       // Soft rounded edges (12px)
                    colorTextBase: '#1a202c', // Dark slate for text
                },
            }}
        >
            {children}
        </ConfigProvider>
    );
};
