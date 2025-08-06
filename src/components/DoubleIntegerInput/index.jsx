import { useState, useEffect } from 'react';
import { Typography, InputNumber, Flex, Space } from 'antd';

function DoubleIntegerInput({ label, values, onChange = () => {} }) {
  const [numbers, setNumbers] = useState(values || [1, 1]);

  // Handle values changing
  const onChange1 = (value) => setNumbers((e) => [value, e[1]]);
  const onChange2 = (value) => setNumbers((e) => [e[0], value]);

  // Trigger the "onChange" event whenever the values change
  useEffect(() => onChange(numbers), [numbers]);

  return (
    <Flex justify="space-between" align="center" gap="1em">
      <Typography.Text strong>{label}</Typography.Text>
      <Space.Compact>
        <InputNumber maxLength={1} min={1} max={9} value={numbers[0]} style={{ width: '4em' }} onChange={onChange1} />
        <InputNumber maxLength={1} min={1} max={9} value={numbers[1]} style={{ width: '4em' }} onChange={onChange2} />
      </Space.Compact>
    </Flex>
  );
};

export { DoubleIntegerInput };
