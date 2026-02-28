import {
  Form,
  Button,
  Checkbox,
  Typography,
  Divider,
  Space
} from 'antd';
import {
  ArrowLeftOutlined
} from '@ant-design/icons';
import { VygooThemeProvider } from './components/VygooThemeProvider';
import { VygooInput, VygooSelect, VygooDatePicker } from './components/VygooFields';
import './App.css';

const { Title, Text } = Typography;

const VygooLogo = () => (
  <div className="vygoo-logo">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#722ed1" />
      <path d="M2 17L12 22L22 17" stroke="#eb2f96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 12L12 17L22 12" stroke="#1677ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <span>VYGOO</span>
  </div>
);

const App = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const regionOptions = [
    { label: 'North America', value: 'na' },
    { label: 'Europe', value: 'eu' },
    { label: 'Asia Pacific', value: 'apac' },
    { label: 'Latin America', value: 'latam' },
    { label: 'Middle East', value: 'me' },
    { label: 'Africa', value: 'af' },
  ];

  const deptOptions = [
    { label: 'Sales & Marketing', value: 'sales' },
    { label: 'Operations', value: 'ops' },
    { label: 'Product Development', value: 'product' },
    { label: 'Customer Success', value: 'cs' },
    { label: 'Human Resources', value: 'hr' },
    { label: 'Finance', value: 'finance' },
  ];

  return (
    <VygooThemeProvider>
      <div className="container">
        <div className="login-card">
          <VygooLogo />

          <div className="agent-portal-text">Agent Portal</div>
          <div className="welcome-text">Welcome back</div>
          <div className="subtitle-text">Sign in to access your agent dashboard.</div>

          <Form
            form={form}
            name="login"
            layout="vertical"
            initialValues={{
              email: 'cmamal5@gmail.com',
              remember: true
            }}
            onFinish={onFinish}
            requiredMark={false}
          >
            <VygooInput
              label="Email"
              name="email"
              placeholder="Enter your email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            />

            <VygooInput
              label="Password"
              name="password"
              // type="password"
              placeholder="Enter your password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            />

            <VygooSelect
              label="Assigned Regions (Multi-select)"
              name="regions"
              mode="multiple"
              allowClear
              placeholder="Select regions"
              options={regionOptions}
            />

            <VygooSelect
              label="Primary Department (Searchable Dropdown)"
              name="department"
              showSearch
              placeholder="Search department"
              options={deptOptions}
            />

            <div style={{ display: 'flex', gap: '16px', marginBottom: '8px' }}>
              <VygooDatePicker
                label="Appointment Date"
                name="appointment"
              />

              <VygooDatePicker
                label="Tour Schedule"
                name="schedule"
                type="range"
              />
            </div>

            <Divider style={{ margin: '24px 0' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a style={{ color: '#1a202c', fontWeight: 600, fontSize: '14px' }} href="">
                Forgot password?
              </a>
            </div>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Login as Agent
              </Button>
            </Form.Item>
          </Form>

          <div className="footer-links">
            Don't have an account? <a href="">Create an account</a>
          </div>

          <div className="back-arrow">
            <ArrowLeftOutlined />
          </div>
        </div>
      </div>
    </VygooThemeProvider>
  );
};

export default App;
