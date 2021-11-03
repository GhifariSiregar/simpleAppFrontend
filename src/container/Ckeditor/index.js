import React, { useState } from "react";
import { Container, Button } from 'reactstrap';

import { CKEditor } from 'ckeditor4-react';

export default function CkeditorTest() {
  const [data, setData] = useState(
    `<div style={{fontSize: '12pt'}}>
      <span style="font-family:Arial,Helvetica,sans-serif"><img alt="" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBbgGQAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9/ooooAKSlpKACilooASiiloASiiigBaSlpKAClpKWgBKKKKAFooooAKKKKACiikoAWiiigBKWiigAooooAKKKKAEpaKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApKWigAooooASloooASilooAKSlooASloooASloooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoopK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" style="width:150px" /></span>
<div style="text-align:right"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">Jakarta, 02 November 2021***</span></span></div>
<span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">Kepada Yth,<br />
<strong>PT. TESTES</strong><br />
Jalan Medan Merdeka Medan<br />
Merdeka Medan Merdeka Medan<br />
Merdeka Medan Merdeka</span></span><br />
&nbsp;
<table border="0" cellpadding="1" cellspacing="1" style="width:500px">
	<tbody>
		<tr>
			<td style="height:20px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">U. p</span></span></td>
			<td style="height:20px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">: *** Second column</span></span></td>
		</tr>
		<tr>
			<td><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">Perihal</span></span></td>
			<td><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">: *** Second column</span></span></td>
		</tr>
	</tbody>
</table>
<br />
<span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">Dengan Hormat,<br />
&nbsp;</span></span>

<div style="text-align:justify"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">Kami mengucapkan terima kasih atas kepercayaan <strong>PT. TESTES</strong>** (selanjutnya disebut &ldquo;<strong>TESTES</strong>** &rdquo;) memilih <strong>PT. FINANSIAL INTEGRASI TEKNOLOGI</strong> (selanjutnya disebut &ldquo;<strong>PINJAMMODAL</strong>&rdquo;) sebagai mitra keuangan TESTES**. Sehubungan dengan permohonan fasilitas pinjaman yang diajukan oleh TESTES** melalui PINJAMMODAL, maka berikut kami sampaikan bahwa PINJAMMODAL menyetujui pemberian fasilitas pinjaman kepada TESTES** dengan syarat dan ketentuan sebagai berikut :<br />
<br />
<strong>1. Plafon Fasilitas Pinjaman</strong></span></span>

<table border="0" cellpadding="1" cellspacing="1" style="height:5px; width:500px">
	<tbody>
		<tr>
			<td style="height:8px; width:11px">&nbsp;</td>
			<td style="height:8px; width:16px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">a.</span></span></td>
			<td style="height:8px; width:208px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">Ketentuan umum pemberian plafon :</span></span></td>
			<td style="height:8px; width:263px">&nbsp;</td>
		</tr>
		<tr>
			<td style="height:21px; width:11px">&nbsp;</td>
			<td style="height:21px; width:16px">&nbsp;</td>
			<td style="height:21px; width:208px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">Maksimal Plafond</span></span></td>
			<td style="height:21px; width:263px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">:&nbsp;*** Rp -,00 (rrr)</span></span></td>
		</tr>
		<tr>
			<td style="width:11px">&nbsp;</td>
			<td style="width:16px">&nbsp;</td>
			<td style="width:208px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">Maksimal Pencairan</span></span></td>
			<td style="width:263px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">: Rp -,00 (rrr)</span></span></td>
		</tr>
		<tr>
			<td style="width:11px">&nbsp;</td>
			<td style="width:16px">&nbsp;</td>
			<td style="width:208px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">Metode Pencairan</span></span></td>
			<td style="width:263px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">: Rp -,00 (rrr)</span></span></td>
		</tr>
		<tr>
			<td style="width:11px">&nbsp;</td>
			<td style="width:16px">&nbsp;</td>
			<td style="width:208px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">Available Periode Plafond</span></span></td>
			<td style="width:263px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">: Rp -,00 (rrr)</span></span></td>
		</tr>
	</tbody>
</table>
&nbsp;

<table border="0" cellpadding="1" cellspacing="1" style="width:618px">
	<tbody>
		<tr>
			<td style="height:21px; width:11px">&nbsp;</td>
			<td style="height:21px; width:16px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">b.</span></span></td>
			<td style="height:21px; width:208px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">Struktur Pricing :</span></span></td>
			<td style="height:21px; width:378px">&nbsp;</td>
		</tr>
		<tr>
			<td style="width:11px">&nbsp;</td>
			<td style="width:16px">&nbsp;</td>
			<td colspan="2" rowspan="4" style="width:587px">
			<table align="center" border="1" cellpadding="1" cellspacing="0" style="width:100%">
				<thead>
					<tr>
						<th scope="col" style="text-align: center; width: 273px;"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">Tenor</span></span></th>
						<th scope="col" style="text-align: center; width: 293px;"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">Interest</span></span></th>
						<th scope="col" style="text-align: center; width: 244px;"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">Admin</span></span></th>
						<th scope="col" style="text-align: center; width: 228px;"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">Late charge/hari</span></span></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td style="text-align:center; width:273px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">30 Hari</span></span></td>
						<td style="text-align:center; width:293px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">***Value</span></span></td>
						<td style="text-align:center; width:244px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">***Value</span></span></td>
						<td colspan="1" rowspan="3" style="text-align:center; width:228px"><br />
						<span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">**aa</span></span><br />
						&nbsp;</td>
					</tr>
					<tr>
						<td style="text-align:center; width:273px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">60 Hari</span></span></td>
						<td style="text-align:center; width:293px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">***Value</span></span></td>
						<td style="text-align:center; width:244px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">***Value</span></span></td>
					</tr>
					<tr>
						<td style="text-align:center; width:273px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">90 Hari</span></span></td>
						<td style="text-align:center; width:293px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">***Value</span></span></td>
						<td style="text-align:center; width:244px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">***Value</span></span></td>
					</tr>
				</tbody>
			</table>
			</td>
		</tr>
		<tr>
			<td style="width:11px">&nbsp;</td>
			<td style="width:16px">&nbsp;</td>
		</tr>
		<tr>
			<td style="width:11px">&nbsp;</td>
			<td style="width:16px">&nbsp;</td>
		</tr>
		<tr>
			<td style="width:11px">&nbsp;</td>
			<td style="width:16px">&nbsp;</td>
		</tr>
	</tbody>
</table>
&nbsp;

<table border="0" cellpadding="1" cellspacing="1" style="width:618px">
	<tbody>
		<tr>
			<td style="height:21px; width:11px">&nbsp;</td>
			<td style="height:21px; width:16px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">c.</span></span></td>
			<td colspan="2" rowspan="1" style="height:21px; width:208px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">Tujuan Pinjaman :&nbsp;<span style="color:black">untuk menggantikan biaya operasional perusahaan.</span></span></span></td>
		</tr>
	</tbody>
</table>
<br />
<span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px"><strong>2. Persyaratan di muka</strong></span></span>

<table border="0" cellpadding="1" cellspacing="1" style="width:663px">
	<tbody>
		<tr>
			<td style="width:12px">&nbsp;</td>
			<td colspan="4" style="width:647px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">TESTES** wajib menyerahkan persyaratan secara di muka kepada PINJAMMODAL sebagai berikut, yang terus berlaku selama TESTES** memiliki kewajiban kepada PINJAMMODAL :</span></span></td>
		</tr>
		<tr>
			<td style="width:12px">&nbsp;</td>
			<td style="width:23px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">a.&nbsp;</span></span></td>
			<td colspan="3" style="width:624px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">Personal Guarantee atas nama **Bobby Pranawijaya Mulya</span></span></td>
		</tr>
		<tr>
			<td style="width:12px">&nbsp;</td>
			<td style="width:23px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">b.&nbsp;</span></span></td>
			<td colspan="3" style="width:624px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">Surat Pernyataan dan kuasa atas pemberian cheque</span></span></td>
		</tr>
		<tr>
			<td style="width:12px">&nbsp;</td>
			<td style="width:23px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">c.</span></span></td>
			<td colspan="3" style="width:624px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">Cheque sebesar **110% dari nilai plafond dengan rincian berikut :</span></span></td>
		</tr>
		<tr>
			<td style="width:12px">&nbsp;</td>
			<td style="width:23px">&nbsp;</td>
			<td colspan="3" style="width:624px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">&bull;&nbsp; 11 (empat) lembar Cheque dengan masing-masing nominal **Rp. 500.000.000,- (lima ratus juta rupiah)</span></span></td>
		</tr>
	</tbody>
</table>

<div style="text-align:center"><br />
<br />
<span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px"><strong><span style="color:#3498db">PT FINANSIAL INTEGRASI TEKNOLOGI</span></strong><br />
BFI Tower 2nd Floor | Sunburst CBD Lot 1.2<br />
Jl. Kapten Soebijanto Djojohadikusumo, BSD City, Tangerang 15322<br />
<strong>T</strong> : 021 - 5062 6888&nbsp;&nbsp;<strong>W</strong> : www.FIT.id</span></span>

<div style="page-break-after:always"><span style="display:none">&nbsp;</span></div>
</div>
<span style="font-family:Arial,Helvetica,sans-serif"><img alt="" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBbgGQAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9/ooooAKSlpKACilooASiiloASiiigBaSlpKAClpKWgBKKKKAFooooAKKKKACiikoAWiiigBKWiigAooooAKKKKAEpaKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApKWigAooooASloooASilooAKSlooASloooASloooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoopK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" style="width:150px" /></span><br />
&nbsp;
<table border="0" cellpadding="1" cellspacing="1" style="width:663px">
	<tbody>
		<tr>
			<td rowspan="2" style="width:12px">&nbsp;</td>
			<td style="width:23px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">d.&nbsp;</span></span></td>
			<td colspan="3" rowspan="2" style="width:624px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="color:black">Akses rekening Bank berupa User Id dan Password untuk View dengan tujuan monitoring oleh PINJAMMODAL,&nbsp;berikut rinciannya :</span></span></span></td>
		</tr>
		<tr>
			<td style="width:23px">&nbsp;</td>
		</tr>
		<tr>
			<td style="width:12px">&nbsp;</td>
			<td style="width:23px">&nbsp;</td>
			<td style="width:40px">&nbsp;</td>
			<td style="width:150px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">Bank</span></span></td>
			<td style="width:436px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">: ***BCA</span></span></td>
		</tr>
		<tr>
			<td style="width:12px">&nbsp;</td>
			<td style="width:23px">&nbsp;</td>
			<td style="width:40px">&nbsp;</td>
			<td style="width:150px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">Nama Pemilik Rekening</span></span></td>
			<td style="width:436px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">: ***BCA</span></span></td>
		</tr>
		<tr>
			<td style="width:12px">&nbsp;</td>
			<td style="width:23px">&nbsp;</td>
			<td style="width:40px">&nbsp;</td>
			<td style="width:150px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">Nomor Rekening</span></span></td>
			<td style="width:436px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">: ***BCA</span></span></td>
		</tr>
	</tbody>
</table>
<br />
<span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">&nbsp; &nbsp; Dokumen pada huruf a dan b sesuai format surat yang diberikan PINJAMMODAL</span></span><br />
<br />
<span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px"><strong>3. Pencairan Plafon Fasilitas Pinjaman</strong></span></span>

<div style="text-align:left">
<table border="0" cellpadding="1" cellspacing="1" style="width:666px">
	<tbody>
		<tr>
			<td style="width:12px">&nbsp;</td>
			<td colspan="2" style="text-align:justify; width:650px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">Untuk setiap kali pencairan plafon fasilitas pinjaman, TESTES** wajib mengajukan permohonan kepada PINJAMMODAL dengan menyerahkan kepada PINJAMMODAL berupa kelengkapan dokumen sebagai berikut :</span></span></td>
		</tr>
		<tr>
			<td rowspan="2" style="width:12px">&nbsp;</td>
			<td style="width:22px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">a.</span></span></td>
			<td rowspan="2" style="width:630px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px"><em><span style="color:black">Purchase Order </span></em><span style="color:black">(<em>PO</em>) yang dikeluarkan oleh MONOGRAM kepada penyedia barang/jas beserta invoice/ faktur penjualan yang dikeluarkan oleh penyedia barang/jasa.</span></span></span></td>
		</tr>
		<tr>
			<td style="width:22px">&nbsp;</td>
		</tr>
		<tr>
			<td rowspan="2" style="width:12px">&nbsp;</td>
			<td style="width:22px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">b.</span></span></td>
			<td rowspan="2" style="width:630px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">**TESTES wajib menanda-tangani Perjanjian Pemberian Pinjaman berikut dengan lampirannya dengan cara digital signature atau dengan cara lain yang ditetapkan oleh PINJAMMODAL.</span></span></td>
		</tr>
		<tr>
			<td style="width:22px">&nbsp;</td>
		</tr>
		<tr>
			<td style="width:12px">&nbsp;</td>
			<td style="width:22px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">c.</span></span></td>
			<td style="width:630px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">Pembelian barang tidak diperkenankan ke perusahaan afliasi Borrower.</span></span></td>
		</tr>
		<tr>
			<td style="width:12px">&nbsp;</td>
			<td style="width:22px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">d.</span></span></td>
			<td style="width:630px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">Dokumen lain yang ditetapkan dan akan diinformasikan lebih lanjut oleh PINJAMMODAL apabila diperlukan</span></span></td>
		</tr>
		<tr>
			<td style="width:12px">&nbsp;</td>
			<td style="width:22px">&nbsp;</td>
			<td style="width:630px">&nbsp;</td>
		</tr>
		<tr>
			<td style="width:12px">&nbsp;</td>
			<td colspan="2" rowspan="1" style="width:22px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">Pencairan plafon fasilitas pinjaman oleh PINJAMMODAL akan dilakukan kepada **TESTES dengan syarat dan ketentuan sebagai berikut :</span></span></td>
		</tr>
		<tr>
			<td style="width:12px">&nbsp;</td>
			<td style="width:22px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">a.</span></span></td>
			<td style="width:630px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">Pencairan akan dilakukan PINJAMMODAL dengan cara transfer ke rekening Supplier</span></span></td>
		</tr>
		<tr>
			<td style="width:12px">&nbsp;</td>
			<td style="width:22px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">b.</span></span></td>
			<td style="width:630px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">Syarat dan ketentuan pencairan fasilitas pinjaman :</span></span></td>
		</tr>
		<tr>
			<td style="width:12px">&nbsp;</td>
			<td style="width:22px">&nbsp;</td>
			<td style="width:630px">
			<table border="0" cellpadding="1" cellspacing="1" style="width:629px">
				<tbody>
					<tr>
						<td style="width:18px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">-</span></span></td>
						<td colspan="2" rowspan="2" style="width:609px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">Pokok hutang diberikan kepada **TESTES tidak termasuk Pajak Pertambahan Nilai (PPN) dan Pajak Penghasilan (PPh).</span></span></td>
					</tr>
					<tr>
						<td style="width:18px">&nbsp;</td>
					</tr>
					<tr>
						<td style="width:18px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">-</span></span></td>
						<td colspan="2" rowspan="2" style="width:609px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="color:black">Pembayaran dilakukan sebanyak 1 kali, dengan jangka waktu fasilitas Pinjaman maksimal 90 hari dari sejak tanggal pencairan fasilitas Pinjaman sebagaimana tersebut pada huruf a di atas</span></span></span></td>
					</tr>
					<tr>
						<td style="width:18px">&nbsp;</td>
					</tr>
					<tr>
						<td rowspan="2" style="height:13px; width:18px">&nbsp;</td>
						<td style="height:13px; width:22px">&bull;</td>
						<td rowspan="2" style="height:13px; width:587px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="color:black">Biaya administrasi dikenakan dari nilai pencairan yang akan dibayarkan disetiap kewajiban angsuran setiap jatuh tempo.</span></span></span></td>
					</tr>
					<tr>
						<td style="height:13px; width:22px">&nbsp;</td>
					</tr>
					<tr>
						<td style="height:13px; width:18px">&nbsp;</td>
						<td style="height:13px; width:22px">&bull;</td>
						<td style="height:13px; width:587px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">Biaya interest atau bunga dikenakan dari pokok hutang.</span></span></td>
					</tr>
					<tr>
						<td style="width:18px">-</td>
						<td colspan="2" style="width:609px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">Denda keterlambatan dibayar per hari dari jumlah yang wajib dibayar oleh **TESTES</span></span></td>
					</tr>
				</tbody>
			</table>
			</td>
		</tr>
	</tbody>
</table>
<br />
<span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px"><strong>4. <span style="color:black">Pembayaran Kembali Fasilitas Pinjaman</span></strong></span></span>

<table border="0" cellpadding="1" cellspacing="1" style="width:669px">
	<tbody>
		<tr>
			<td style="width:14px">&nbsp;</td>
			<td colspan="3" style="text-align:justify; width:651px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">**TESTES wajib melakukan pembayaran kembali fasilitas pinjaman yang telah dicairkan oleh PINJAMMODAL pada setiap tanggal jatuh tempo yang ditetapkan dalam Perjanjian Pemberian Pinjaman (atau 1 hari kerja sebelumnya apabila tanggal jatuh tempo dimaksud merupakan hari libur nasional) ke rekening PT. Finansial Integrasi Teknologi dengan rincian sebagai berikut :</span></span></td>
		</tr>
	</tbody>
</table>

<div style="text-align:justify">
<div style="text-align:center"><br />
<span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px"><strong><span style="color:#3498db">PT FINANSIAL INTEGRASI TEKNOLOGI</span></strong><br />
BFI Tower 2nd Floor | Sunburst CBD Lot 1.2<br />
Jl. Kapten Soebijanto Djojohadikusumo, BSD City, Tangerang 15322<br />
<strong>T</strong> : 021 - 5062 6888&nbsp;&nbsp;<strong>W</strong> : www.FIT.id</span></span>

<div style="page-break-after:always"><span style="display:none">&nbsp;</span></div>

<div style="text-align:left"><span style="font-family:Arial,Helvetica,sans-serif"><img alt="" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBbgGQAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9/ooooAKSlpKACilooASiiloASiiigBaSlpKAClpKWgBKKKKAFooooAKKKKACiikoAWiiigBKWiigAooooAKKKKAEpaKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApKWigAooooASloooASilooAKSlooASloooASloooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoopK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" style="width:150px" /></span><br />
&nbsp;</div>

<table border="0" cellpadding="1" cellspacing="1" style="width:669px">
	<tbody>
		<tr>
			<td style="width:14px">&nbsp;</td>
			<td style="width:37px">&nbsp;</td>
			<td style="text-align:left; width:126px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">Bank</span></span></td>
			<td style="text-align:left; width:491px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="color:black">: Bank CIMB Niaga</span></span></span></td>
		</tr>
		<tr>
			<td style="width:14px">&nbsp;</td>
			<td style="width:37px">&nbsp;</td>
			<td style="text-align:left; width:126px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">Nama Rekening</span></span></td>
			<td style="text-align:left; width:491px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="color:black">: PT. Finansial Integrasi Teknologi</span></span></span></td>
		</tr>
		<tr>
			<td style="width:14px">&nbsp;</td>
			<td style="width:37px">&nbsp;</td>
			<td style="text-align:left; width:126px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">Cabang</span></span></td>
			<td style="text-align:left; width:491px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="color:black">: Pondok Indah</span></span></span></td>
		</tr>
		<tr>
			<td style="width:14px">&nbsp;</td>
			<td style="width:37px">&nbsp;</td>
			<td style="text-align:left; width:126px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">Nomor Rekening</span></span></td>
			<td style="text-align:left; width:491px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="color:black">: 800154581300</span></span></span></td>
		</tr>
		<tr>
			<td style="width:14px">&nbsp;</td>
			<td style="width:37px">&nbsp;</td>
			<td style="text-align:left; width:126px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">Mata Uang</span></span></td>
			<td style="text-align:left; width:491px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">: IDR</span></span></td>
		</tr>
	</tbody>
</table>
&nbsp;

<div style="text-align:left"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px"><strong>5. <span style="color:black">Syarat dan Ketentuan Lain</span></strong></span></span></div>

<table border="0" cellpadding="1" cellspacing="1" style="width:672px">
	<tbody>
		<tr>
			<td style="height:45px; text-align:right; width:14px">&nbsp;</td>
			<td style="height:45px; width:16px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">a.</span></span></td>
			<td rowspan="3" style="height:234px; text-align:justify; width:640px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">PINJAMMODAL berhak dan berwenang menetapkan syarat dan ketentuan pemberian plafon dan pencairan fasilitas pinjaman kepada **TESTES,&nbsp;termasuk namun tidak terbatas melakukan perubahan terhadap syarat dan ketentuan yang telah ditetapkan dalam surat penawaran ini serta membekukan atau memberhentikan pemberian plafon fasilitas pinjaman. PINJAMMODAL pada setiap waktu yang dipandang perlu berhak melakukan analisa dan evaluasi terhadap kelayakan **TESTES menerima fasilitas pinjaman dari PINJAMMODAL dengan pula memperhatikan kolektibilitas **TESTES pada Sistem Layanan Informasi Keuangan (SLIK) atau Lembaga Pengelola Informasi Perkreditan (LPIP) yang ditunjuk oleh Otoritas Jasa Keuangan Republik Indonesia (selanjutnya disebut &ldquo;OJK&rdquo;), dan mengacu pada prinsip mengenal nasabah yang ditetapkan oleh OJK, serta syarat dan ketentuan sebagaimana ditetapkan dalam surat penawaran ini, dan PINJAMMODAL berwenang sepenuhnya melakukan validasi dan verifkasi kepada pihak ketiga, serta mengeluarkan keputusan untuk menyetujui atau menolak setiap permohonan pencairan fasilitas pinjaman yang diajukan oleh **TESTES tersebut.</span></span></td>
		</tr>
		<tr>
			<td style="height:173px; text-align:right; width:14px">&nbsp;</td>
			<td style="height:19px; width:16px">&nbsp;</td>
		</tr>
	</tbody>
</table>
</div>

<table border="0" cellpadding="1" cellspacing="1" style="width:676px">
	<tbody>
		<tr>
			<td rowspan="2" style="width:16px">&nbsp;</td>
			<td style="width:16px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">b.</span></span></td>
			<td colspan="3" rowspan="2" style="width:640px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">Selama **TESTES masih memiliki fasilitas pinjaman berjalan kepada PINJAMMODAL maka **TESTES wajib menyerahkan kelengkapan dokumen berikut di bawah ini pada tanggal 15 setiap bulannya kepada PINJAMMODAL :</span></span></td>
		</tr>
		<tr>
			<td style="width:16px">&nbsp;</td>
		</tr>
		<tr>
			<td style="width:16px">&nbsp;</td>
			<td style="width:16px">&nbsp;</td>
			<td style="width:47px">&nbsp;</td>
			<td style="width:151px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">Bank</span></span></td>
			<td style="width:445px">:&nbsp;<span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">***BCA</span></span></td>
		</tr>
		<tr>
			<td style="width:16px">&nbsp;</td>
			<td style="width:16px">&nbsp;</td>
			<td style="width:47px">&nbsp;</td>
			<td style="width:151px"><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">Nama Pemilik Rekening</span></span></td>
			<td style="width:445px">:&nbsp;<span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">***BCA</span></span></td>
		</tr>
		<tr>
			<td style="width:16px">&nbsp;</td>
			<td style="width:16px">&nbsp;</td>
			<td style="width:47px">&nbsp;</td>
			<td style="width:151px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">Nomor Rekening</span></span></td>
			<td style="width:445px">:&nbsp;<span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">***BCA</span></span></td>
		</tr>
		<tr>
			<td rowspan="2" style="height:73px; width:16px">&nbsp;</td>
			<td style="height:34px; width:16px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">c.</span></span></td>
			<td colspan="3" rowspan="2" style="height:73px; width:640px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">PINJAMMODAL atas pertimbangannya sendiri berhak untuk membekukan atau menghentikan pemberian plafon, dan juga menolak pencairan fasilitas pinjaman yang dimohonkan **TESTES, termasuk namun tidak terbatas apabila terjadi salah satu atau beberapa kejadian sebagai berikut :</span></span></td>
		</tr>
		<tr>
			<td style="width:16px">&nbsp;</td>
		</tr>
		<tr>
			<td style="width:16px">&nbsp;</td>
			<td style="width:16px">&nbsp;</td>
			<td colspan="3" style="width:640px">
			<table border="0" cellpadding="1" cellspacing="1" style="width:100%">
				<tbody>
					<tr>
						<td style="width:21px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">-</span></span></td>
						<td rowspan="2" style="width:614px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">**TESTES melalaikan kewajiban kepada PINJAMMODAL atas fasilitas pinjaman yang telah dicairkan kepada **TESTES sesuai Perjanjian Pinjaman maupun ketentuan dalam surat penawaran ini.</span></span></td>
					</tr>
					<tr>
						<td style="width:21px">&nbsp;</td>
					</tr>
					<tr>
						<td style="width:21px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">-</span></span></td>
						<td rowspan="2" style="width:614px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">**TESTES tidak melaksanakan kewajiban pembayaran secara tepat waktu dan/ atau tepat jumlah kepada pemberi pinjaman melalui PINJAMMODAL.</span></span></td>
					</tr>
					<tr>
						<td style="width:21px">&nbsp;</td>
					</tr>
					<tr>
						<td style="width:21px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">-</span></span></td>
						<td rowspan="2" style="width:614px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">Pernyataan dan/ atau jaminan dan/ atau dokumen yang diberikan oleh **TESTES kepada PINJAMMODAL ternyata palsu, tidak benar atau tidak sesuai dengan kenyataan sebenarnya.</span></span></td>
					</tr>
					<tr>
						<td style="width:21px">&nbsp;</td>
					</tr>
					<tr>
						<td style="width:21px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">-</span></span></td>
						<td rowspan="2" style="width:614px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">**TESTES terlibat suatu perkara di Pengadilan atau institusi berwenang lainnya, dan/atau kekayaan **TESTES seluruhnya atau sebagian disita oleh pihak yang berwajib atau oleh pihak lainnya.</span></span></td>
					</tr>
					<tr>
						<td style="width:21px">&nbsp;</td>
					</tr>
					<tr>
						<td style="width:21px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">-</span></span></td>
						<td rowspan="2" style="width:614px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">terjadi penurunan usaha pada **TESTES atau jika kekayaan dari **TESTES nilainya turun sedemikian rupa atau rusak, atau izin usaha **TESTES dicabut atau dibatasi oleh pihak yang berwenang.</span></span></td>
					</tr>
				</tbody>
			</table>
			</td>
			<td colspan="3" style="width:640px">&nbsp;</td>
		</tr>
	</tbody>
</table>

<div style="text-align:center"><br />
<span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px"><strong><span style="color:#3498db">PT FINANSIAL INTEGRASI TEKNOLOGI</span></strong><br />
BFI Tower 2nd Floor | Sunburst CBD Lot 1.2<br />
Jl. Kapten Soebijanto Djojohadikusumo, BSD City, Tangerang 15322<br />
<strong>T</strong> : 021 - 5062 6888&nbsp;&nbsp;<strong>W</strong> : www.FIT.id</span></span>

<div style="page-break-after:always"><span style="display:none">&nbsp;</span></div>

<div style="text-align:left"><span style="font-family:Arial,Helvetica,sans-serif"><img alt="" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBbgGQAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9/ooooAKSlpKACilooASiiloASiiigBaSlpKAClpKWgBKKKKAFooooAKKKKACiikoAWiiigBKWiigAooooAKKKKAEpaKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApKWigAooooASloooASilooAKSlooASloooASloooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoopK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" style="width:150px" /></span></div>
</div>
<br />
<span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">Demikian penawaran ini diberikan, apabila Bapak menyetujui penawaran kami ini mohon untuk menanda-tangani surat penawaran ini dan menyerahkan kembali kepada kami disertai dengan dokumen&ndash;dokumen persyaratan yang telah kami sampaikan di atas. Atas perhatian dan kerjasamanya kami mengucapkan terima kasih.</span></span><br />
&nbsp;
<table border="0" cellpadding="1" cellspacing="1" style="width:676px">
	<tbody>
		<tr>
			<td><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">Hormat Kami,</span></span></td>
			<td><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">Menyetujui,</span></span></td>
		</tr>
		<tr>
			<td><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif"><strong><span style="color:black">PT. FINANSIAL INTEGRASI TEKNOLOGI</span></strong></span></span></td>
			<td><strong><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">** PT TESTES</span></span></strong></td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td><ins><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif"><strong>TJIU HERMAN HANDOKO</strong></span></span></ins></td>
			<td><ins><strong><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">**TES AND TEST</span></span></strong></ins></td>
		</tr>
		<tr>
			<td><strong><span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px">Presiden Direktur</span></span></strong></td>
			<td><strong><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">Tes title</span></span></strong></td>
		</tr>
	</tbody>
</table>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
&nbsp;
<div style="text-align:center"><br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<span style="font-family:Arial,Helvetica,sans-serif"><span style="font-size:12px"><strong><span style="color:#3498db">PT FINANSIAL INTEGRASI TEKNOLOGI</span></strong><br />
BFI Tower 2nd Floor | Sunburst CBD Lot 1.2<br />
Jl. Kapten Soebijanto Djojohadikusumo, BSD City, Tangerang 15322<br />
<strong>T</strong> : 021 - 5062 6888&nbsp;&nbsp;<strong>W</strong> : www.FIT.id</span></span></div>
</div>
</div>
</div>

    </div>`
  );

  return (
    <Container>
      <div>
        aaaa
      </div>
      <div>
        <CKEditor
          editorUrl={`${window.location.origin}/ckeditor/ckeditor.js`}
          initData={data}
          
          onChange={evt => setData(evt.editor.getData())}
        />
      </div>
      <Button type="button" onClick={() => console.log(data)}>Print Data</Button>
    </Container>
  )
}