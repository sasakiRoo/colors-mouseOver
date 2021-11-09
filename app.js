const shape = document.querySelector('.shape')  //membuat bentuk kotak
const clrs = [

	'#DF0EC9',
	'#8E0AF3',
	'#3803E3',
	'#1E03EA',
	'#0BCEFF',
	'#0DF950',
	'#BAF912',
	'#FDE30B',
	'#FFB30F'

]

// ^ variabel diatas menampung array warna, nanti warna ini akan berubah-ubah


const shapeSize = [
	{
		width: '100px',
		height: '80px'
	},
	{
		width: '200px',
		height: '400px'
	},
	{
		width: '500px',
		height: '100px'
	}
]
// ^ variabel diatas menampung array objek ukuran (lebar dan tinggi), nanti ukuran objek ini akan berubah-ubah

function clr(){
	let rdCl = clrs[Math.floor(Math.random() * clrs.length)] // variabel ini lah yang berutugas untuk merubah warna
	shape.style.backgroundColor = rdCl //keadaan awal variable shape berubah dengan variabel perubah warna diatas
}

function shapeChange(){
	let szH = shapeSize[Math.floor(Math.random() * shapeSize.length)].height // variabel ini lah yang berutugas untuk merubah ukuran tinggi
	let szW = shapeSize[Math.floor(Math.random() * shapeSize.length)].width // variabel ini lah yang berutugas untuk merubah ukuran lebar
	shape.style.height = szH //keadaan awal variable shape berubah dengan variabel perubah ukuran tinggi diatas
	shape.style.width = szW //keadaan awal variable shape berubah dengan variabel perubah ukuran lebar diatas
}

shape.addEventListener('mouseover', () => {
	clr()
	shapeChange()
})

// ^ ketika variabel shape ditekan, maka jalankan masing-masing fungsi, fungsi warna dan ukuran