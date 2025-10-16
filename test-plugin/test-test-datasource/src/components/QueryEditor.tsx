import React, { ChangeEvent } from 'react';
import { InlineField, Input, Stack } from '@grafana/ui';
import { QueryEditorProps } from '@grafana/data';
import { DataSource } from '../datasource';
import { MyDataSourceOptions, MyQuery } from '../types';
import { Button } from './button';
import { SpecialButton } from './special-button';

type Props = QueryEditorProps<DataSource, MyQuery, MyDataSourceOptions>;

export function QueryEditor({ query, onChange, onRunQuery }: Props) {
  const onQueryTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...query, queryText: event.target.value });
  };

  const onConstantChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...query, constant: parseFloat(event.target.value) });
    // executes the query
    onRunQuery();
  };

  const { queryText, constant } = query;

  return (
    <Stack gap={0}>
      <InlineField label="Constant">
        <Input
          id="query-editor-constant"
          onChange={onConstantChange}
          value={constant}
          width={8}
          type="number"
          step="0.1"
        />
      </InlineField>
      <InlineField label="Query Text" labelWidth={16} tooltip="Not used yet">
        <Input
          id="query-editor-query-text"
          onChange={onQueryTextChange}
          value={queryText || ''}
          required
          placeholder="Enter a query"
        />
      </InlineField>
      <InlineField label="Test Components">
        <Stack gap={1}>
          <Button variant="primary" onClick={onRunQuery}>Run Query (Button)</Button>
          <SpecialButton special={true} onClick={onRunQuery}>Run Query (Special)</SpecialButton>
        </Stack>
      </InlineField>
    </Stack>
  );
}
