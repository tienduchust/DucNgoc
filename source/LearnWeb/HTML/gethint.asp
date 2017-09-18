<%
response.expires = -1
dim a(30)
'Mot mang cac ten Sinh Vien
a(1)="An"
a(2)="Bao"
a(3)="Chinh"
a(4)="Doanh"
a(5)="Em"
a(6)="Gam"
a(7)="Hoang"
a(8)="Kim"
a(9)="Linh"
a(10)="Ngoc"
a(11)="Oanh"
a(12)="Phuc"
a(13)="Anh"
a(14)="Nam"
a(15)="Sen"
a(16)="Dong"
a(17)="Sinh"
a(18)="Torres"
a(19)="Ronaldo"
a(20)="Messi"
a(21)="Suares"
a(22)="Morinho"
a(23)="Van Gan"
a(24)="Viet"

'Lay tham so q tu dia chi URL
q=ucase(request.querystring("q"))

'Tim tat ca cac hint co trong Array neu do dai cua q>0
if len(q)>0 then
  hint=""
  for i=1 to 30
    if q=ucase(mid(a(i),1,len(q))) then
      if hint="" then
        hint=a(i)
      else
        hint=hint & " , " & a(i)
      end if
    end if
  next
end if

'Ket qua "Khong co suggestion nao" neu khong tim thay bat ky hint nao trong Array
'hoac ket qua la gia tri ten bat ky co trong Array
if hint="" then
  response.write("Khong co suggestion nao")
else
  response.write(hint)
end if
%>