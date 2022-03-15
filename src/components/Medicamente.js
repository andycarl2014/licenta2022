import React, { useState } from 'react';
import { Form, Button, Select, DatePicker, Space } from 'antd';
import { MEDICAMENTATION } from '../helpers/CONSTANTS';
const { Option } = Select;

const Medicamente = () => {
  const [form] = Form.useForm();
  const [medicament, setMedicament] = useState('');
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
  for (let i = 0; i < MEDICAMENTATION.drugs.length; i++) {
    children.push(
      <Option key={MEDICAMENTATION.drugs[i]}>
        {MEDICAMENTATION.drugs[i]}
      </Option>,
    );
  }
  const handleChangeDisease = (value) => {
    setMedicament(MEDICAMENTATION.drugs[value]);
  };
  const handleChangeStartDate = (value) => {
    setStartdate(value);
  };
  const handleChangeEndDate = (value) => {
    setEnddate(value);
  };
  const handleClickSubmit = () => {
    console.log(medicament, startdate, enddate);
  };
  return (
    <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}>
      <Form.Item label='Denumire Medicament'>
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
      <Form.Item label='Interval Orar'>
        <Select style={{ width: '100%' }}>
          <Option key={0}>1 Ore</Option>
          <Option key={1}>2 Ore</Option>
          <Option key={2}>3 Ore</Option>
          <Option key={3}>4 Ore</Option>
          <Option key={4}>5 Ore</Option>
        </Select>
      </Form.Item>
      <Form.Item label='Selecteaza Boala Corespunzatoare'>
        <Select style={{ width: '100%' }}>
          <Option key={0}>
            Selecteaza Boala Corespunzatoare Medicamentelor
          </Option>
        </Select>
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type='primary' onClick={handleClickSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Medicamente;
