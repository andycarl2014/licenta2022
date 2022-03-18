import React, { useState } from 'react';
import {
  Form,
  Button,
  Select,
  DatePicker,
  Space,
  Typography,
  Input,
} from 'antd';
import { BIOMARKERS } from '../helpers/CONSTANTS';
const { Option } = Select;

const Analize = () => {
  const [form] = Form.useForm();
  const [biomarker, setBiomarker] = useState(0);
  const [normalValue, setNormalValue] = useState('');
  const [userValue, setUserValue] = useState('');
  const [date, setDate] = useState(null);

  const formLayout = 'horizontal';
  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
  const children = [];
  for (let i = 0; i < BIOMARKERS.length; i++) {
    children.push(
      <Option i={i} key={BIOMARKERS[i].Test}>
        {BIOMARKERS[i].Test}
      </Option>,
    );
  }
  const handleChangeBiomarker = (value, event) => {
    setBiomarker(event.i);
    if (BIOMARKERS[event.i]['Conventional Units'])
      setNormalValue(BIOMARKERS[event.i]['Conventional Units']);
    else setNormalValue(BIOMARKERS[event.i]['SI Units']);
  };
  const handleChangeStartDate = (value) => {
    setDate(value);
  };

  const handleClickSubmit = () => {};
  return (
    <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}>
      <Form.Item label='Denumire Biomarker'>
        <Select
          style={{ width: '100%' }}
          showSearch
          onChange={handleChangeBiomarker}>
          {children}
        </Select>
      </Form.Item>
      <Form.Item label='Normal Value'>
        <Typography>{normalValue}</Typography>
      </Form.Item>
      <Form.Item label='Your value'>
        <Input />
      </Form.Item>
      <Form.Item label='Data analize'>
        <Space direction='horizontal'>
          <DatePicker
            placeholder='Select Date'
            value={date}
            onChange={handleChangeStartDate}
          />
        </Space>
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type='primary' onClick={handleClickSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Analize;
