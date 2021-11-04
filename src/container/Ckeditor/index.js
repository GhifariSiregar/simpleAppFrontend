import React, { useState } from "react";
import { Container, Button } from 'reactstrap';

import { CKEditor } from 'ckeditor4-react';

import { convertPdf } from "../../api/convert_pdf";

export default function CkeditorTest() {
  const [data, setData] = useState(
    `<div style="text-align:right"><span style="font-family:Arial,Helvetica,sans-serif">Jakarta, 02 November 2021***</span></div>
		<span style="font-family:Arial,Helvetica,sans-serif">Kepada Yth,<br />
		<strong>PT. TESTES</strong><br />
		Jalan Medan Merdeka Medan<br />
		Merdeka Medan Merdeka Medan<br />
		Merdeka Medan Merdeka</span><br />
		&nbsp;
		<table border="0" cellpadding="1" cellspacing="1" style="width:500px">
			<tbody>
				<tr>
					<td style="height:20px"><span style="font-family:Arial,Helvetica,sans-serif">U. p</span></td>
					<td style="height:20px"><span style="font-family:Arial,Helvetica,sans-serif">: *** Second column</span></td>
				</tr>
				<tr>
					<td><span style="font-family:Arial,Helvetica,sans-serif">Perihal</span></td>
					<td><span style="font-family:Arial,Helvetica,sans-serif">: *** Second column</span></td>
				</tr>
			</tbody>
		</table>
		<br />
		<span style="font-family:Arial,Helvetica,sans-serif">Dengan Hormat,<br />
		&nbsp;</span>
		
		<div style="text-align:justify">
		<div style="text-align:left">
		<div style="text-align:justify"><span style="font-family:Arial,Helvetica,sans-serif">Kami mengucapkan terima kasih atas kepercayaan <strong>PT. TESTES</strong>** (selanjutnya disebut &ldquo;<strong>TESTES</strong>**&rdquo;) memilih <strong>PT. FINANSIAL INTEGRASI TEKNOLOGI</strong> (selanjutnya disebut &ldquo;<strong>PINJAMMODAL</strong>&rdquo;) sebagai mitra keuangan TESTES**. Sehubungan dengan permohonan fasilitas pinjaman yang diajukan oleh TESTES** melalui PINJAMMODAL, maka berikut kami sampaikan bahwa PINJAMMODAL menyetujui pemberian fasilitas pinjaman kepada TESTES** dengan syarat dan ketentuan sebagai berikut :</span></div>
		
		<table border="0" cellpadding="1" cellspacing="1" style="height:5px; width:844px">
			<tbody>
				<tr>
					<td style="height:10px; width:11px">&nbsp;</td>
					<td style="height:10px; width:16px"><span style="font-family:Arial,Helvetica,sans-serif">a.</span></td>
					<td style="height:10px; width:282px"><span style="font-family:Arial,Helvetica,sans-serif">Ketentuan umum pemberian plafon :</span></td>
					<td style="height:10px; width:532px">&nbsp;</td>
				</tr>
				<tr>
					<td style="height:21px; width:11px">&nbsp;</td>
					<td style="height:21px; width:16px">&nbsp;</td>
					<td style="height:21px; width:282px"><span style="font-family:Arial,Helvetica,sans-serif">Maksimal Plafond</span></td>
					<td style="height:21px; width:532px"><span style="font-family:Arial,Helvetica,sans-serif">:&nbsp;*** Rp -,00 (rrr)</span></td>
				</tr>
				<tr>
					<td style="width:11px">&nbsp;</td>
					<td style="width:16px">&nbsp;</td>
					<td style="width:282px"><span style="font-family:Arial,Helvetica,sans-serif">Maksimal Pencairan</span></td>
					<td style="width:532px"><span style="font-family:Arial,Helvetica,sans-serif">: Rp -,00 (rrr)</span></td>
				</tr>
				<tr>
					<td style="width:11px">&nbsp;</td>
					<td style="width:16px">&nbsp;</td>
					<td style="width:282px"><span style="font-family:Arial,Helvetica,sans-serif">Metode Pencairan</span></td>
					<td style="width:532px"><span style="font-family:Arial,Helvetica,sans-serif">: Rp -,00 (rrr)</span></td>
				</tr>
				<tr>
					<td style="width:11px">&nbsp;</td>
					<td style="width:16px">&nbsp;</td>
					<td style="width:282px"><span style="font-family:Arial,Helvetica,sans-serif">Available Periode Plafond</span></td>
					<td style="width:532px"><span style="font-family:Arial,Helvetica,sans-serif">: Rp -,00 (rrr)</span></td>
				</tr>
			</tbody>
		</table>
		&nbsp;
		
		<table border="0" cellpadding="1" cellspacing="1" style="width:850px">
			<tbody>
				<tr>
					<td style="height:21px; width:11px">&nbsp;</td>
					<td style="height:21px; width:16px"><span style="font-family:Arial,Helvetica,sans-serif">b.</span></td>
					<td style="height:21px; width:208px"><span style="font-family:Arial,Helvetica,sans-serif">Struktur Pricing :</span></td>
					<td style="height:21px; width:610px">&nbsp;</td>
				</tr>
				<tr>
					<td style="width:11px">&nbsp;</td>
					<td style="width:16px">&nbsp;</td>
					<td colspan="2" rowspan="4" style="width:819px">
					<table align="center" border="1" cellpadding="1" cellspacing="0" style="width:100%">
						<thead>
							<tr>
								<th scope="col" style="text-align:center; width:273px"><span style="font-family:Arial,Helvetica,sans-serif">Tenor</span></th>
								<th scope="col" style="text-align:center; width:293px"><span style="font-family:Arial,Helvetica,sans-serif">Interest</span></th>
								<th scope="col" style="text-align:center; width:244px"><span style="font-family:Arial,Helvetica,sans-serif">Admin</span></th>
								<th scope="col" style="text-align:center; width:228px"><span style="font-family:Arial,Helvetica,sans-serif">Late charge/hari</span></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td style="text-align:center; width:273px"><span style="font-family:Arial,Helvetica,sans-serif">30 Hari</span></td>
								<td style="text-align:center; width:293px"><span style="font-family:Arial,Helvetica,sans-serif">***Value</span></td>
								<td style="text-align:center; width:244px"><span style="font-family:Arial,Helvetica,sans-serif">***Value</span></td>
								<td colspan="1" rowspan="3" style="text-align:center; width:228px"><br />
								<span style="font-family:Arial,Helvetica,sans-serif">**aa</span><br />
								&nbsp;</td>
							</tr>
							<tr>
								<td style="text-align:center; width:273px"><span style="font-family:Arial,Helvetica,sans-serif">60 Hari</span></td>
								<td style="text-align:center; width:293px"><span style="font-family:Arial,Helvetica,sans-serif">***Value</span></td>
								<td style="text-align:center; width:244px"><span style="font-family:Arial,Helvetica,sans-serif">***Value</span></td>
							</tr>
							<tr>
								<td style="text-align:center; width:273px"><span style="font-family:Arial,Helvetica,sans-serif">90 Hari</span></td>
								<td style="text-align:center; width:293px"><span style="font-family:Arial,Helvetica,sans-serif">***Value</span></td>
								<td style="text-align:center; width:244px"><span style="font-family:Arial,Helvetica,sans-serif">***Value</span></td>
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
					<td style="height:21px; width:16px"><span style="font-family:Arial,Helvetica,sans-serif">c.</span></td>
					<td colspan="2" rowspan="1" style="height:21px; width:208px"><span style="font-family:Arial,Helvetica,sans-serif">Tujuan Pinjaman :&nbsp;<span style="color:black">untuk menggantikan biaya operasional perusahaan.</span></span></td>
				</tr>
			</tbody>
		</table>
		<br />
		<span style="font-family:Arial,Helvetica,sans-serif"><strong>2. Persyaratan di muka</strong></span>
		
		<table border="0" cellpadding="1" cellspacing="1" style="width:853px">
			<tbody>
				<tr>
					<td style="width:12px">&nbsp;</td>
					<td colspan="5" style="text-align:justify; width:834px"><span style="font-family:Arial,Helvetica,sans-serif">TESTES** wajib menyerahkan persyaratan secara di muka kepada PINJAMMODAL sebagai berikut, yang terus berlaku selama TESTES** memiliki kewajiban kepada PINJAMMODAL :</span></td>
				</tr>
				<tr>
					<td style="width:12px">&nbsp;</td>
					<td style="width:22.875px"><span style="font-family:Arial,Helvetica,sans-serif">a.&nbsp;</span></td>
					<td colspan="4" style="width:817.125px"><span style="font-family:Arial,Helvetica,sans-serif">Personal Guarantee atas nama **Bobby Pranawijaya Mulya</span></td>
				</tr>
				<tr>
					<td style="width:12px">&nbsp;</td>
					<td style="width:22.875px"><span style="font-family:Arial,Helvetica,sans-serif">b.&nbsp;</span></td>
					<td colspan="4" style="width:817.125px"><span style="font-family:Arial,Helvetica,sans-serif">Surat Pernyataan dan kuasa atas pemberian cheque</span></td>
				</tr>
				<tr>
					<td style="width:12px">&nbsp;</td>
					<td style="width:22.875px"><span style="font-family:Arial,Helvetica,sans-serif">c.</span></td>
					<td colspan="4" style="width:817.125px"><span style="font-family:Arial,Helvetica,sans-serif">Cheque sebesar **110% dari nilai plafond dengan rincian berikut :</span></td>
				</tr>
				<tr>
					<td style="width:12px">&nbsp;</td>
					<td style="width:22.875px">&nbsp;</td>
					<td colspan="4" style="width:817.125px"><span style="font-family:Arial,Helvetica,sans-serif">&bull;&nbsp; 11 (empat) lembar Cheque dengan masing-masing nominal **Rp. 500.000.000,- (lima ratus juta rupiah)</span></td>
				</tr>
				<tr>
					<td style="width:12px">&nbsp;</td>
					<td style="width:22.875px">d.</td>
					<td colspan="4" style="width:817.125px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="color:black">Akses rekening Bank berupa User Id dan Password untuk View dengan tujuan monitoring oleh PINJAMMODAL,&nbsp;berikut rinciannya :</span></span></td>
				</tr>
				<tr>
					<td style="width:12px">&nbsp;</td>
					<td style="width:23px">&nbsp;</td>
					<td style="width:40px">&nbsp;</td>
					<td style="width:150px"><span style="font-family:Arial,Helvetica,sans-serif">Bank</span></td>
					<td style="width:623px"><span style="font-family:Arial,Helvetica,sans-serif">: ***BCA</span></td>
				</tr>
				<tr>
					<td style="width:12px">&nbsp;</td>
					<td style="width:23px">&nbsp;</td>
					<td style="width:40px">&nbsp;</td>
					<td style="width:150px"><span style="font-family:Arial,Helvetica,sans-serif">Nama Pemilik Rekening</span></td>
					<td style="width:623px"><span style="font-family:Arial,Helvetica,sans-serif">: ***BCA</span></td>
				</tr>
				<tr>
					<td style="width:12px">&nbsp;</td>
					<td style="width:23px">&nbsp;</td>
					<td style="width:40px">&nbsp;</td>
					<td style="width:150px"><span style="font-family:Arial,Helvetica,sans-serif">Nomor Rekening</span></td>
					<td style="width:623px"><span style="font-family:Arial,Helvetica,sans-serif">: ***BCA</span></td>
				</tr>
			</tbody>
		</table>
		<br />
		<span style="font-family:Arial,Helvetica,sans-serif">&nbsp; &nbsp; Dokumen pada huruf a dan b sesuai format surat yang diberikan PINJAMMODAL</span><br />
		<br />
		<span style="font-family:Arial,Helvetica,sans-serif"><strong>3. Pencairan Plafon Fasilitas Pinjaman</strong></span>
		
		<div style="text-align:left">
		<table border="0" cellpadding="1" cellspacing="1" style="width:855px">
			<tbody>
				<tr>
					<td style="width:12px">&nbsp;</td>
					<td colspan="2" style="text-align:justify; width:839px"><span style="font-family:Arial,Helvetica,sans-serif">Untuk setiap kali pencairan plafon fasilitas pinjaman, TESTES** wajib mengajukan permohonan kepada PINJAMMODAL dengan menyerahkan kepada PINJAMMODAL berupa kelengkapan dokumen sebagai berikut :</span></td>
				</tr>
				<tr>
					<td rowspan="2" style="height:28px; width:12px">&nbsp;</td>
					<td style="height:14px; width:22px"><span style="font-family:Arial,Helvetica,sans-serif">a.</span></td>
					<td rowspan="2" style="height:28px; text-align:justify; width:817px"><span style="font-family:Arial,Helvetica,sans-serif"><em><span style="color:black">Purchase Order </span></em><span style="color:black">(<em>PO</em>) yang dikeluarkan oleh MONOGRAM kepada penyedia barang/jas beserta invoice/ faktur penjualan yang dikeluarkan oleh penyedia barang/jasa.</span></span></td>
				</tr>
				<tr>
					<td style="height:14px; width:22px">&nbsp;</td>
				</tr>
				<tr>
					<td rowspan="2" style="width:12px">&nbsp;</td>
					<td style="width:22px"><span style="font-family:Arial,Helvetica,sans-serif">b.</span></td>
					<td rowspan="2" style="text-align:justify; width:817px"><span style="font-family:Arial,Helvetica,sans-serif">**TESTES wajib menanda-tangani Perjanjian Pemberian Pinjaman berikut dengan lampirannya dengan cara digital signature atau dengan cara lain yang ditetapkan oleh PINJAMMODAL.</span></td>
				</tr>
				<tr>
					<td style="width:22px">&nbsp;</td>
				</tr>
				<tr>
					<td style="width:12px">&nbsp;</td>
					<td style="width:22px"><span style="font-family:Arial,Helvetica,sans-serif">c.</span></td>
					<td style="width:817px"><span style="font-family:Arial,Helvetica,sans-serif">Pembelian barang tidak diperkenankan ke perusahaan afliasi Borrower.</span></td>
				</tr>
				<tr>
					<td style="width:12px">&nbsp;</td>
					<td style="width:22px"><span style="font-family:Arial,Helvetica,sans-serif">d.</span></td>
					<td style="width:817px"><span style="font-family:Arial,Helvetica,sans-serif">Dokumen lain yang ditetapkan dan akan diinformasikan lebih lanjut oleh PINJAMMODAL apabila diperlukan</span></td>
				</tr>
				<tr>
					<td style="width:12px">&nbsp;</td>
					<td style="width:22px">&nbsp;</td>
					<td style="width:817px">&nbsp;</td>
				</tr>
				<tr>
					<td style="width:12px">&nbsp;</td>
					<td colspan="2" rowspan="1" style="width:839px"><span style="font-family:Arial,Helvetica,sans-serif">Pencairan plafon fasilitas pinjaman oleh PINJAMMODAL akan dilakukan kepada **TESTES dengan syarat dan ketentuan sebagai berikut :</span></td>
				</tr>
				<tr>
					<td style="width:12px">&nbsp;</td>
					<td style="width:22px"><span style="font-family:Arial,Helvetica,sans-serif">a.</span></td>
					<td style="width:817px"><span style="font-family:Arial,Helvetica,sans-serif">Pencairan akan dilakukan PINJAMMODAL dengan cara transfer ke rekening Supplier</span></td>
				</tr>
				<tr>
					<td style="width:12px">&nbsp;</td>
					<td style="width:22px"><span style="font-family:Arial,Helvetica,sans-serif">b.</span></td>
					<td style="width:817px"><span style="font-family:Arial,Helvetica,sans-serif">Syarat dan ketentuan pencairan fasilitas pinjaman :</span></td>
				</tr>
				<tr>
					<td style="width:12px">&nbsp;</td>
					<td style="width:22px">&nbsp;</td>
					<td style="width:817px">
					<table border="0" cellpadding="1" cellspacing="1" style="width:100%">
						<tbody>
							<tr>
								<td style="width:18px"><span style="font-family:Arial,Helvetica,sans-serif">-</span></td>
								<td colspan="2" rowspan="1" style="width:609px"><span style="font-family:Arial,Helvetica,sans-serif">Pokok hutang diberikan kepada **TESTES tidak termasuk Pajak Pertambahan Nilai (PPN) dan Pajak Penghasilan (PPh).</span></td>
							</tr>
							<tr>
								<td style="width:18px"><span style="font-family:Arial,Helvetica,sans-serif">-</span></td>
								<td colspan="2" rowspan="2" style="text-align:justify; width:609px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="color:black">Pembayaran dilakukan sebanyak 1 kali, dengan jangka waktu fasilitas Pinjaman maksimal 90 hari dari sejak tanggal pencairan fasilitas Pinjaman sebagaimana tersebut pada huruf a di atas</span></span></td>
							</tr>
							<tr>
								<td style="width:18px">&nbsp;</td>
							</tr>
							<tr>
								<td rowspan="1" style="height:13px; width:18px">&nbsp;</td>
								<td style="height:13px; width:22px">&bull;</td>
								<td rowspan="1" style="height:13px; width:587px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="color:black">Biaya administrasi dikenakan dari nilai pencairan yang akan dibayarkan disetiap kewajiban angsuran setiap jatuh tempo.</span></span></td>
							</tr>
							<tr>
								<td style="height:13px; width:18px">&nbsp;</td>
								<td style="height:13px; width:22px">&bull;</td>
								<td style="height:13px; width:587px"><span style="font-family:Arial,Helvetica,sans-serif">Biaya interest atau bunga dikenakan dari pokok hutang.</span></td>
							</tr>
							<tr>
								<td style="width:18px">-</td>
								<td colspan="2" style="width:609px"><span style="font-family:Arial,Helvetica,sans-serif">Denda keterlambatan dibayar per hari dari jumlah yang wajib dibayar oleh **TESTES</span></td>
							</tr>
						</tbody>
					</table>
					</td>
				</tr>
			</tbody>
		</table>
		<br />
		<span style="font-family:Arial,Helvetica,sans-serif"><strong>4. <span style="color:black">Pembayaran Kembali Fasilitas Pinjaman</span></strong></span>
		
		<table border="0" cellpadding="1" cellspacing="1" style="width:854px">
			<tbody>
				<tr>
					<td style="width:14px">&nbsp;</td>
					<td colspan="3" style="text-align:justify; width:837px"><span style="font-family:Arial,Helvetica,sans-serif">**TESTES wajib melakukan pembayaran kembali fasilitas pinjaman yang telah dicairkan oleh PINJAMMODAL pada setiap tanggal jatuh tempo yang ditetapkan dalam Perjanjian Pemberian Pinjaman (atau 1 hari kerja sebelumnya apabila tanggal jatuh tempo dimaksud merupakan hari libur nasional) ke rekening PT. Finansial Integrasi Teknologi dengan rincian sebagai berikut :</span></td>
				</tr>
				<tr>
					<td style="width:14px">&nbsp;</td>
					<td style="width:37px">&nbsp;</td>
					<td style="text-align:left; width:126px"><span style="font-family:Arial,Helvetica,sans-serif">Bank</span></td>
					<td style="text-align:left; width:491px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="color:black">: Bank CIMB Niaga</span></span></td>
				</tr>
				<tr>
					<td style="width:14px">&nbsp;</td>
					<td style="width:37px">&nbsp;</td>
					<td style="text-align:left; width:126px"><span style="font-family:Arial,Helvetica,sans-serif">Nama Rekening</span></td>
					<td style="text-align:left; width:491px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="color:black">: PT. Finansial Integrasi Teknologi</span></span></td>
				</tr>
				<tr>
					<td style="width:14px">&nbsp;</td>
					<td style="width:37px">&nbsp;</td>
					<td style="text-align:left; width:126px"><span style="font-family:Arial,Helvetica,sans-serif">Cabang</span></td>
					<td style="text-align:left; width:491px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="color:black">: Pondok Indah</span></span></td>
				</tr>
				<tr>
					<td style="width:14px">&nbsp;</td>
					<td style="width:37px">&nbsp;</td>
					<td style="text-align:left; width:126px"><span style="font-family:Arial,Helvetica,sans-serif">Nomor Rekening</span></td>
					<td style="text-align:left; width:491px"><span style="font-family:Arial,Helvetica,sans-serif"><span style="color:black">: 800154581300</span></span></td>
				</tr>
				<tr>
					<td style="width:14px">&nbsp;</td>
					<td style="width:37px">&nbsp;</td>
					<td style="text-align:left; width:126px"><span style="font-family:Arial,Helvetica,sans-serif">Mata Uang</span></td>
					<td style="text-align:left; width:491px"><span style="font-family:Arial,Helvetica,sans-serif">: IDR</span></td>
				</tr>
			</tbody>
		</table>
		
		<div style="text-align:justify">
		<div style="text-align:center">&nbsp;
		<div style="text-align:left"><span style="font-family:Arial,Helvetica,sans-serif"><strong>5. <span style="color:black">Syarat dan Ketentuan Lain</span></strong></span></div>
		</div>
		
		<div style="text-align:left">
		<table border="0" cellpadding="1" cellspacing="1" style="width:863px">
			<tbody>
				<tr>
					<td style="width:16px">&nbsp;</td>
					<td style="width:16px"><span style="font-family:Arial,Helvetica,sans-serif">a.</span></td>
					<td colspan="3" rowspan="2" style="text-align:justify; width:827px"><span style="font-family:Arial,Helvetica,sans-serif">PINJAMMODAL berhak dan berwenang menetapkan syarat dan ketentuan pemberian plafon dan pencairan fasilitas pinjaman kepada **TESTES,&nbsp;termasuk namun tidak terbatas melakukan perubahan terhadap syarat dan ketentuan yang telah ditetapkan dalam surat penawaran ini serta membekukan atau memberhentikan pemberian plafon fasilitas pinjaman. PINJAMMODAL pada setiap waktu yang dipandang perlu berhak melakukan analisa dan evaluasi terhadap kelayakan **TESTES menerima fasilitas pinjaman dari PINJAMMODAL dengan pula memperhatikan kolektibilitas **TESTES pada Sistem Layanan Informasi Keuangan (SLIK) atau Lembaga Pengelola Informasi Perkreditan (LPIP) yang ditunjuk oleh Otoritas Jasa Keuangan Republik Indonesia (selanjutnya disebut &ldquo;OJK&rdquo;), dan mengacu pada prinsip mengenal nasabah yang ditetapkan oleh OJK, serta syarat dan ketentuan sebagaimana ditetapkan dalam surat penawaran ini, dan PINJAMMODAL berwenang sepenuhnya melakukan validasi dan verifkasi kepada pihak ketiga, serta mengeluarkan keputusan untuk menyetujui atau menolak setiap permohonan pencairan fasilitas pinjaman yang diajukan oleh **TESTES tersebut.</span><br />
					&nbsp;</td>
				</tr>
				<tr>
					<td style="width:16px">&nbsp;</td>
					<td style="width:16px">&nbsp;</td>
				</tr>
				<tr>
					<td style="width:16px">&nbsp;</td>
					<td rowspan="1" style="width:16px"><span style="font-family:Arial,Helvetica,sans-serif">b.</span></td>
					<td colspan="3" rowspan="2" style="text-align:justify; width:827px"><span style="font-family:Arial,Helvetica,sans-serif">Selama **TESTES masih memiliki fasilitas pinjaman berjalan kepada PINJAMMODAL maka **TESTES wajib menyerahkan kelengkapan dokumen berikut di bawah ini pada tanggal 15 setiap bulannya kepada PINJAMMODAL :</span></td>
				</tr>
				<tr>
					<td style="width:16px">&nbsp;</td>
					<td style="width:16px">&nbsp;</td>
				</tr>
				<tr>
					<td style="width:16px">&nbsp;</td>
					<td style="width:16px">&nbsp;</td>
					<td style="width:47px">&nbsp;</td>
					<td style="width:231px"><span style="font-family:Arial,Helvetica,sans-serif">Bank</span></td>
					<td style="width:548px">:&nbsp;<span style="font-family:Arial,Helvetica,sans-serif">***BCA</span></td>
				</tr>
				<tr>
					<td style="width:16px">&nbsp;</td>
					<td style="width:16px">&nbsp;</td>
					<td style="width:47px">&nbsp;</td>
					<td style="width:231px"><span style="font-family:Arial,Helvetica,sans-serif">Nama Pemilik Rekening</span></td>
					<td style="width:548px">:&nbsp;<span style="font-family:Arial,Helvetica,sans-serif">***BCA</span></td>
				</tr>
				<tr>
					<td style="width:16px">&nbsp;</td>
					<td style="width:16px">&nbsp;</td>
					<td style="width:47px">&nbsp;</td>
					<td style="width:231px"><span style="font-family:Arial,Helvetica,sans-serif">Nomor Rekening</span></td>
					<td style="width:548px">:&nbsp;<span style="font-family:Arial,Helvetica,sans-serif">***BCA</span></td>
				</tr>
				<tr>
					<td style="width:16px">&nbsp;</td>
					<td style="width:16px"><span style="font-family:Arial,Helvetica,sans-serif">c.</span></td>
					<td colspan="3" rowspan="2" style="text-align:justify; width:827px"><span style="font-family:Arial,Helvetica,sans-serif">PINJAMMODAL atas pertimbangannya sendiri berhak untuk membekukan atau menghentikan pemberian plafon, dan juga menolak pencairan fasilitas pinjaman yang dimohonkan **TESTES, termasuk namun tidak terbatas apabila terjadi salah satu atau beberapa kejadian sebagai berikut :</span></td>
				</tr>
				<tr>
					<td style="width:16px">&nbsp;</td>
					<td style="width:16px">&nbsp;</td>
				</tr>
				<tr>
					<td style="width:16px">&nbsp;</td>
					<td style="width:16px">&nbsp;</td>
					<td colspan="3" style="width:827px">
					<table border="0" cellpadding="1" cellspacing="1" style="width:100%">
						<tbody>
							<tr>
								<td style="width:21px"><span style="font-family:Arial,Helvetica,sans-serif">-</span></td>
								<td rowspan="2" style="text-align:justify; width:614px"><span style="font-family:Arial,Helvetica,sans-serif">**TESTES melalaikan kewajiban kepada PINJAMMODAL atas fasilitas pinjaman yang telah dicairkan kepada **TESTES sesuai Perjanjian Pinjaman maupun ketentuan dalam surat penawaran ini.</span></td>
							</tr>
							<tr>
								<td style="width:21px">&nbsp;</td>
							</tr>
							<tr>
								<td style="width:21px"><span style="font-family:Arial,Helvetica,sans-serif">-</span></td>
								<td rowspan="2" style="text-align:justify; width:614px"><span style="font-family:Arial,Helvetica,sans-serif">**TESTES tidak melaksanakan kewajiban pembayaran secara tepat waktu dan/ atau tepat jumlah kepada pemberi pinjaman melalui PINJAMMODAL.</span></td>
							</tr>
							<tr>
								<td style="width:21px">&nbsp;</td>
							</tr>
							<tr>
								<td style="width:21px"><span style="font-family:Arial,Helvetica,sans-serif">-</span></td>
								<td rowspan="2" style="text-align:justify; width:614px"><span style="font-family:Arial,Helvetica,sans-serif">Pernyataan dan/ atau jaminan dan/ atau dokumen yang diberikan oleh **TESTES kepada PINJAMMODAL ternyata palsu, tidak benar atau tidak sesuai dengan kenyataan sebenarnya.</span></td>
							</tr>
							<tr>
								<td style="width:21px">&nbsp;</td>
							</tr>
							<tr>
								<td style="width:21px"><span style="font-family:Arial,Helvetica,sans-serif">-</span></td>
								<td rowspan="2" style="text-align:justify; width:614px"><span style="font-family:Arial,Helvetica,sans-serif">**TESTES terlibat suatu perkara di Pengadilan atau institusi berwenang lainnya, dan/atau kekayaan **TESTES seluruhnya atau sebagian disita oleh pihak yang berwajib atau oleh pihak lainnya.</span></td>
							</tr>
							<tr>
								<td style="width:21px">&nbsp;</td>
							</tr>
							<tr>
								<td style="width:21px"><span style="font-family:Arial,Helvetica,sans-serif">-</span></td>
								<td rowspan="2" style="text-align:justify; width:614px"><span style="font-family:Arial,Helvetica,sans-serif">terjadi penurunan usaha pada **TESTES atau jika kekayaan dari **TESTES nilainya turun sedemikian rupa atau rusak, atau izin usaha **TESTES dicabut atau dibatasi oleh pihak yang berwenang.</span></td>
							</tr>
						</tbody>
					</table>
					</td>
				</tr>
			</tbody>
		</table>
		</div>
		<br />
		<span style="font-family:Arial,Helvetica,sans-serif">Demikian penawaran ini diberikan, apabila Bapak menyetujui penawaran kami ini mohon untuk menanda-tangani surat penawaran ini dan menyerahkan kembali kepada kami disertai dengan dokumen&ndash;dokumen persyaratan yang telah kami sampaikan di atas. Atas perhatian dan kerjasamanya kami mengucapkan terima kasih.</span><br />
		&nbsp;
		<table border="0" cellpadding="1" cellspacing="1" style="width:854px">
			<tbody>
				<tr>
					<td><span style="font-family:Arial,Helvetica,sans-serif">Hormat Kami,</span></td>
					<td style="width:378px"><span style="font-family:Arial,Helvetica,sans-serif">Menyetujui,</span></td>
				</tr>
				<tr>
					<td><span style="font-family:Arial,Helvetica,sans-serif"><strong><span style="color:black">PT. FINANSIAL INTEGRASI TEKNOLOGI</span></strong></span></td>
					<td style="width:378px"><strong><span style="font-family:Arial,Helvetica,sans-serif">** PT TESTES</span></strong></td>
				</tr>
				<tr>
					<td>&nbsp;</td>
					<td style="width:378px">&nbsp;</td>
				</tr>
				<tr>
					<td>&nbsp;</td>
					<td style="width:378px">&nbsp;</td>
				</tr>
				<tr>
					<td>&nbsp;</td>
					<td style="width:378px">&nbsp;</td>
				</tr>
				<tr>
					<td><ins><span style="font-family:Arial,Helvetica,sans-serif"><strong>TJIU HERMAN HANDOKO</strong></span></ins></td>
					<td style="width:378px"><ins><strong><span style="font-family:Arial,Helvetica,sans-serif">**TES AND TEST</span></strong></ins></td>
				</tr>
				<tr>
					<td><strong><span style="font-family:Arial,Helvetica,sans-serif">Presiden Direktur</span></strong></td>
					<td style="width:378px"><strong><span style="font-family:Arial,Helvetica,sans-serif">Tes title</span></strong></td>
				</tr>
			</tbody>
		</table>
		</div>
		</div>
		</div>
		</div>
		`
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
      <Button type="button" onClick={() => {console.log(data); convertPdf.convert({ data }).then((response) => { console.log(response.data) })}}>Print Data</Button>
    </Container>
  )
}