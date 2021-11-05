import React, { useEffect, useState } from "react";
import { Container, Button } from 'reactstrap';

import { CKEditor } from 'ckeditor4-react';

import { convertPdf } from "../../api/convert_pdf";

export default function CkeditorTest() {
  const [data, setData] = useState('');

  useEffect(() => {
    convertPdf.get().then((result) => { setData(result); })
  }, [data])

  return (
    <Container>
      <div>
        aaaa
      </div>
      <div>
        {data ? <CKEditor
          editorUrl={`${window.location.origin}/ckeditor/ckeditor.js`}
          initData={data}
          onChange={evt => setData(evt.editor.getData())}
        /> : ''}
      </div>
      <Button type="button" onClick={() => {
        console.log(data); 
        convertPdf.convert({ content: data, cust_company_temp_id: '2d885b10-21de-11ec-8124-c7ef1b94c6a1' }).then((response) => { console.log(response.data) })
      }}>Print Data</Button>
    </Container>
  )
}