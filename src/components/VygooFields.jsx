import React from 'react';
import { Form, Input, Select, DatePicker } from 'antd';
import './VygooFields.css';

const { RangePicker: AntRangePicker } = DatePicker;

/**
 * VygooFieldWrapper provides the CSS class to anchor scoped overrides.
 */
const VygooFieldWrapper = ({ children }) => (
    <div className="vygoo-field-wrapper">
        {children}
    </div>
);

export const VygooInput = ({ label, name, rules, placeholder, type = 'text', ...props }) => {
    const Component = type === 'password' ? Input.Password : Input;
    return (
        <Form.Item label={label} name={name} rules={rules}>
            <VygooFieldWrapper>
                <Component
                    placeholder={placeholder}
                    {...props}
                />
            </VygooFieldWrapper>
        </Form.Item>
    );
};

export const VygooSelect = ({ label, name, rules, placeholder, options, mode, showSearch, ...props }) => {
    return (
        <Form.Item label={label} name={name} rules={rules}>
            <VygooFieldWrapper>
                <Select
                    mode={mode}
                    showSearch={showSearch}
                    placeholder={placeholder}
                    optionFilterProp="label"
                    options={options}
                    className="vygoo-select"
                    {...props}
                />
            </VygooFieldWrapper>
        </Form.Item>
    );
};

export const VygooDatePicker = ({ label, name, rules, placeholder, type = 'single', ...props }) => {
    const Component = type === 'range' ? AntRangePicker : DatePicker;
    return (
        <Form.Item label={label} name={name} rules={rules} style={{ flex: 1, marginBottom: 0 }}>
            <VygooFieldWrapper>
                <Component
                    placeholder={placeholder}
                    style={{ width: '100%' }}
                    {...props}
                />
            </VygooFieldWrapper>
        </Form.Item>
    );
};
