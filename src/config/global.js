export default {
  global: {
    componenteFormativo: 'Comunicación digital y plataformas ',
    descripcionCurso:
      'Las estrategias de comunicación digital cambian rápidamente debido a los avances tecnológicos en las plataformas online disponibles. Antes era suficiente con atraer la atención del público objetivo, actualmente es necesario que las compañías cuenten con el conocimiento acerca de los canales y flujos de información que existen en el entorno digital así como estos se relacionan con las estrategias de marketing.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/flot1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/flot2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/flot3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/flot4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Promoción de productos: conceptos básicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de promoción',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Características y aplicabilidad',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Comunicación digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Definición y tipos de comunicación digital',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Herramientas de utilización',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Manejo de la comunicación digital',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Plataformas en línea',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Conceptos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Tipos de plataforma de venta en línea',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: ' Intermediarios y costos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Objeciones en un plan de mercadeo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Ceupe. (2022). ¿En qué consiste la promoción de ventas?.',
      link:
        ' https://www.ceupe.com/blog/en-que-consiste-la-promocion-de-ventas.html',
    },
    {
      referencia: 'Pukkas. (2021). ¿Por qué vender en Amazon?.',
      link: 'https://pukkas.com/por-que-vender-en-amazon/',
    },
    {
      referencia:
        'Rockcontent. (2017). Qué es Promoción en la mezcla de mercadotecnia. ',
      link: 'https://rockcontent.com/es/blog/promocion-en-el-marketing/ ',
    },
  ],
  glosario: [
    {
      termino: '<em>Adwords</em>',
      significado:
        'Adwords	Google Ads es un servicio y un programa de Google que sirve para publicar publicidad a diferentes anunciantes. Los anuncios patrocinados de Google Ads aparecen en la página de resultados.',
    },
    {
      termino: '<em>Blog</em>',
      significado:
        'Blog	Un blog es un tipo de sitio web donde se publican contenidos de textos.',
    },
    {
      termino: '<em>Bundle</em>',
      significado:
        'Un <em>bundle product</em> es una técnica de venta consistente en sugerir la compra de un grupo de productos a un usuario que ha mostrado un interés previo por alguno de ellos de manera individual.',
    },
    {
      termino: 'B2B',
      significado:
        '<em>Business-to-Business.</em> Se refiere a transacciones, negociaciones o relaciones entre dos compañías. ',
    },
    {
      termino: 'B2C',
      significado:
        '<em>Business-to-Consumer.</em> Se refiere a transacciones, negociaciones o relaciones entre una compañía y un consumidor final.',
    },
    {
      termino: '<em>Rebranding</em>',
      significado:
        'Cambio de marca o rediseño de identidad es una estrategia de marketing en la que se crea un nuevo nombre, término, símbolo, diseño o combinación de los mismos, para una marca establecida con la intención de desarrollar una nueva identidad diferenciada en la mente de los consumidores, inversionistas, competidores y otras partes interesadas.',
    },
    {
      termino: 'SEO',
      significado:
        'El posicionamiento en buscadores, optimización en motores de búsqueda o SEO es un conjunto de acciones orientadas a mejorar el posicionamiento de un sitio web en la lista de resultados de Google, Bing, u otros buscadores de internet.',
    },
    {
      termino: '<em>Spam</em>',
      significado:
        'Correo electrónico no solicitado que se envía a un gran número de destinatarios con fines publicitarios o comerciales.',
    },
  ],
  complementario: [
    {
      tema: '2. Comunicación digital',
      referencia: 'Corniani, M. (2006). Digital Marketing Communication.',
      tipo: 'Libro',
      link:
        'https://www.researchgate.net/publication/227600158_Digital_Marketing_Communication',
    },
    {
      tema: '2.3. Manejo de la comunicación digital',
      referencia:
        'Tokio School. (2020). Marketing y comunicación digital: la importancia del mensaje',
      tipo: 'Artículo',
      link:
        'https://www.tokioschool.com/noticias/marketing-comunicacion-digital/',
    },
    {
      tema: '3. Plataformas en línea',
      referencia:
        'Rockcontent. (2019). Plataformas digitales ¿Qué son y qué tipos existen?. ',
      tipo: 'Artículo',
      link: 'https://rockcontent.com/es/blog/plataformas-digitales/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Stephanie Ascanio',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Luis Fernando Botero Mendoza',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Asesor metodológico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Corrector de estilo ',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Díaz Pinto',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
