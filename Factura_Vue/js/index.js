new Vue({
	el: '#app',
	data: {
		equipos: [
			{
				'celular': 34589612,
				'nombre': 'TARJETA DSC 1832 + Teclado',
				'precio': '120000'
			},
			{
				'celular':32478594,
				'nombre': 'TARJETA DSC 1565 + Teclado',
				'precio': '950000'
			},
			{
				'celular': 35681207,
				'nombre': 'PIR ANTIMASCOTAS MOVIMIENTO',
				'precio': '60000'
			},
            {
				'celular':35468990,
				'nombre': 'PIR DOBLE TECNOLOGIA',
				'precio': '85600'
            },
            {
				'celular':33980102,
				'nombre': 'MAGNETICO LIVIANO PUERTA',
				'precio': '8000'
            },
            {
				'celular':33908654,
				'nombre': 'MAGNETICO PESADO PUERTA',
				'precio': '120000'
			},
			{
				'celular':33526641,
				'nombre': 'PANICO INHALAMBRICO',
				'precio': '15000'
			},
			{
				'celular':33246323,
				'nombre': 'PANICO FIJO',
				'precio': '8000'
			},
			{
				'celular':38973213,
				'nombre': 'SIRENA 20 W',
				'precio': '12000'
			},
			{
				'celular':33908654,
				'nombre': 'TRANSFORMADOR: In:120Vac - Out:18Vac',
				'precio': '21000'
			},
			{
				'celular':31232485,
				'nombre': 'Bateria 12V 7Ah',
				'precio': '13000'
			},

		],

		factura: {
			equipoSeleccionado: {
				celular: '',
				cantidad: 0
			},
		equiposAgregados: []
		},
		total: 0
	},
	methods: {
		infoProductoSeleccionado: function () {
			var celular = this.factura.equipoSeleccionado.celular;

			if (celular) {
				info = this.equipos.find(function (lista) {
					if (lista.celular == celular) {
						return lista;
					}
				});

				this.factura.equipoSeleccionado.nombre = info.nombre;
				this.factura.equipoSeleccionado.precio = info.precio;
			}
		},

		agregarALista: function () {
			var equipoSeleccionado = this.factura.equipoSeleccionado,
				existe = this.factura.equiposAgregados.find(function (el) {
					return el.celular == celularSeleccionado.celular;
				});

			if (!existe) {
				this.factura.equiposAgregados.push({
					celular: equipoSeleccionado.celular,
					nombre: equipoSeleccionado.nombre,
					precio: equipoSeleccionado.precio,
					cantidad: equipoSeleccionado.cantidad
				});
				this.calcularTotal();
			}
		},

		calcularTotal: function () {
			if (this.factura) {

				let self = this;

				this.factura.equiposAgregados.forEach(function (el) {
					self.total += el.cantidad * el.precio;

				});
				console.log("total " + this.total);

			}
		}

	}, filters: {
		calcularIva: function (precio) {
			return (precio * 0.19) + precio
		}
	}
});
