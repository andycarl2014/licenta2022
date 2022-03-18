import React, { useState } from 'react';
import { Form, Button, Select, DatePicker, Space } from 'antd';
import { DISEASES } from '../helpers/CONSTANTS';
const { Option } = Select;

const Boli = () => {
  const [form] = Form.useForm();
  const [history, setHistory] = useState([]);
  const [disease, setDisease] = useState('');
  const [startdate, setStartdate] = useState(null);
  const [enddate, setEnddate] = useState(null);
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
  for (let i = 0; i < DISEASES.length; i++) {
    children.push(
      <Option key={DISEASES[i].disease}>{DISEASES[i].disease}</Option>,
    );
  }
  const handleChangeDisease = (value) => {
    setDisease(DISEASES[value]);
  };
  const handleChangeStartDate = (value) => {
    setStartdate(value);
  };
  const handleChangeEndDate = (value) => {
    setEnddate(value);
  };
  const handleClickSubmit = () => {
    console.log(disease, startdate, enddate);
  };
  const getDateFields = (value) => {};
  return (
    <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}>
      <Form.Item label='Denumire Boala'>
        <Select
          style={{ width: '100%' }}
          showSearch
          onChange={handleChangeDisease}>
          {children}
        </Select>
      </Form.Item>
      <Form.Item label='Data inceput'>
        <Space direction='horizontal'>
          <DatePicker
            placeholder='Select Start Date'
            value={startdate}
            onChange={handleChangeStartDate}
          />
        </Space>
      </Form.Item>
      <Form.Item label='Data sfarsit'>
        <Space direction='horizontal'>
          <DatePicker
            placeholder='Select End Date'
            value={enddate}
            onChange={handleChangeEndDate}
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
export default Boli;
