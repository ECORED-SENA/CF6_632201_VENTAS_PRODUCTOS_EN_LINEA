<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.colr
        span 3
      h1  Plataformas en línea 
    
    .row.mb-5.d-flex.align-items-center
      .col-12.col-md-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/t3-1.png', alt='Texto que describa la imagen')
      .col-12.col-md-8(data-aos="fade-left")
        p.mb-5.text-bold Las plataformas de venta en línea son portales, aplicaciones, <em>widgets</em>, y <em>plugins</em> de redes sociales que permiten comercializar diferentes productos y servicios por medio de diversos canales online. Estas plataformas ofrecen soluciones ajustadas al tamaño de las compañías según sus necesidades, incluso, pueden ofrecer soluciones de infraestructura de venta o robustecer los sistemas de venta de una compañía más grande.
        .row  
          .col-12.col-md-1
            figure
              img.d-none.d-md-flex(src='@/assets/curso/tema3/t3-2.svg', alt='Texto que describa la imagen')
          .col-12.col-md-11
            p.mb-0.text-bold.colr_4 Dentro de la creación de una estrategia de comunicación, <em>marketing</em> y ventas en línea es necesario tener claro cuales son las principales plataformas que existen en el mercado para dichos fines y elegir la mejor opción según los objetivos organizacionales. Sin embargo se debe recordar también que las plataformas digitales son solo una solución que posibilita la ejecución de diversas tareas pero que no deben ser la única base de una estrategia organizacional.
    
    .cajon.bgr.p-4(data-aos="flip-up")
      p.mb-0 Estas herramientas también permiten llevar a cabo campañas de impacto y hacer seguimiento a estrategias con un mayor grado de  complejidad por varias personas simultáneamente.
    
    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Conceptos
    
    .bg_grad-09
      .row.mb-5.d-flex.align-items-center
        .col-12.col-md-1(data-aos="fade-down-right")
          figure.d-flex.justify-content-end
            img.img40.d-none.d-md-flex(src='@/assets/curso/tema3/t3-2.svg', alt='Texto que describa la imagen')
        .col-12.col-md-8.order-2.order-md-1(data-aos="fade-up-left")
          span Las plataformas digitales son espacios en línea que permiten la ejecución de diferentes tareas y acciones según las necesidades que tenga la compañía. 
          span.colr_4.text-bold Estas cuentan con funciones que representan herramientas para la resolución de problemas y necesidades de ventas, comunicación, infraestructura, etc. Algunas de ellas tienen costo, otras son de acceso gratuito. 
          span Es importante conocer los conceptos generales de este tipo de plataformas para así poder elegir la que se ajuste mejor a las necesidades. 
          span.colr_4.text-bold Estos son algunos puntos que se pueden tener en cuenta:
        .col-12.col-md-3.order-1.order-md-3(data-aos="fade-down-right")
          figure
            img(src='@/assets/curso/tema3/t3-3.png', alt='Texto que describa la imagen')

      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="flip-down")
        .tarjeta.bgr_8.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8.d-flex.justify-content-center
              img.img100(src='@/assets/curso/tema3/t3-4.svg' alt='AvatarTop')
          p.text-center Tipo de necesidad: qué tipo de necesidad tiene la compañía, de ventas, de comunicación, de integración, de gestión de proyectos, de diseño institucional, de contabilidad, etc.
        .tarjeta.bgr_8.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8.d-flex.justify-content-center
              img.img100(src='@/assets/curso/tema3/t3-5.svg' alt='AvatarTop')
          p.text-center ¿Qué facilidades financieras tiene la compañía para acceder a un servicio o plataforma que tenga un costo?
        .tarjeta.bgr_8.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8.d-flex.justify-content-center
              img.img100(src='@/assets/curso/tema3/t3-6.svg' alt='AvatarTop')
          p.text-center ¿Cuánto está dispuesto a pagar la compañía por un servicio o plataforma?
        .tarjeta.bgr_8.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8.d-flex.justify-content-center
              img.img100(src='@/assets/curso/tema3/t3-7.svg' alt='AvatarTop')
          p.text-center ¿Qué tipo de comercio maneja la compañía: B2C o B2B?
        .tarjeta.bgr_8.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8.d-flex.justify-content-center
              img.img100(src='@/assets/curso/tema3/t3-8.svg' alt='AvatarTop')
          p.text-center ¿Qué territorios de venta quiere ocupar la compañía?
        .tarjeta.bgr_8.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8.d-flex.justify-content-center
              img.img100(src='@/assets/curso/tema3/t3-9.svg' alt='AvatarTop')
          p.text-center ¿Qué tan robusta es la infraestructura de comunicación digital de la empresa?
        .tarjeta.bgr_8.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8.d-flex.justify-content-center
              img.img100(src='@/assets/curso/tema3/t3-10.svg' alt='AvatarTop')
          p.text-center ¿Cuáles son las necesidades para la gestión de proyectos dentro de la empresa?
        .tarjeta.bgr_8.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8.d-flex.justify-content-center
              img.img100(src='@/assets/curso/tema3/t3-11.svg' alt='AvatarTop')
          p.text-center ¿El equipo humano actual se encuentra ubicado en el mismo lugar o deben trabajar remotamente desde varias locaciones?      

    .bloque-texto-a.bgr_17.p-4.p-md-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-12
          .bloque-texto-a__texto.p-4
            p.mb-0 Ya que existe una gran cantidad de plataformas de comercio electrónico, ventas, comunicación, gestión de proyectos, gestión contable, etc., en el mercado actual, es de gran ayuda para aumentar la efectividad, el rendimiento y reducir costos poder elegir la herramienta de comunicación y gestión en línea de la manera correcta al igual que los territorios en donde se quiere competir.

    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Tipos de plataforma de venta en línea
    
    figure.position-relative.mb-5(data-aos="zoom-in-up")
      img(src='@/assets/curso/tema3/t3-12.png', alt='introducción')
      .row.justify-content-center
        .col-12.col-md-10
          .bgr_2
            p.m-0.p-4.text-bold Partiendo de herramientas de <em>marketing</em> como los análisis DOFA, PESTEL o desarrollo de propuestas comerciales se puede determinar el concepto de negocio y posteriormente se pueden elegir las plataformas comerciales y de ventas más adecuadas para la compañía. Elegir la mejor plataforma no solo será un eslabón clave para resolver las necesidades de venta de la compañía sino para potenciar el posicionamiento en buscadores y redes sociales.

    .bg_grad-10
      p.text-bold.p-4.bgr_18.colr_2.mb-5 Existen tres tipos principales de plataforma de ventas en línea:

      .row.mb-5
        .col-12.col-md-4
          figure.position-relative.mb-5(data-aos="zoom-in-up")
            img(src='@/assets/curso/tema3/t3-13.svg', alt='introducción')
        .col-12.col-md-4
          figure.position-relative.mb-5(data-aos="zoom-in-up")
            img(src='@/assets/curso/tema3/t3-14.svg', alt='introducción')
        .col-12.col-md-4
          figure.position-relative.mb-5(data-aos="zoom-in-up")
            img(src='@/assets/curso/tema3/t3-15.svg', alt='introducción')
 
    h3.p-4.bgr_19.mb-5 <em>E-commerce</em> con alojamiento propio

    .bg_grad-11
      .row.mb-5
        .col-12.col-md-7.order-2.order-md-1(data-aos="fade-right")
          span Este tipo de comercio y ventas electrónicas es normalmente utilizada en compañías que no tienen dentro de sus planes estratégicos tercerizar su servicio de ventas en línea y cuentan con servidores propios. Dichas plataformas implican una inversión mayor que las que están abiertas al público en general ya que requieren instalar <em>software</em> especializados. 
          span.text-bold.colr_1 Adicionalmente uno de los requerimientos es contar con el <em>hosting</em> propio de una página <em>web</em>. 
          h3.mt-3 Funcionalidad
          .row
            .col-12.col-md-2
              figure
                img.d-none.d-md-flex(src='@/assets/curso/tema3/t3-17.svg', alt='Texto que describa la imagen')
            .col-12.col-md-10
              span.text-bold.colr_1 Son varias opciones modulares que pueden adquirirse en paquetes adicionales según las necesidades de ventas de la compañía, 
              span.text-bold adicionalmente se presentan las siguientes funciones:
            ul.ms-5.mt-3.lista-ul--color
              li
                i.fas.fa-caret-right.fa-lg.colr_5
                | Vincular diferentes medios de pago.
              li
                i.fas.fa-caret-right.fa-lg.colr_5
                | Respaldo nacional e internacional.
              li
                i.fas.fa-caret-right.fa-lg.colr_5
                | Envíos globales.
              li
                i.fas.fa-caret-right.fa-lg.colr_5
                | Servicios técnicos en línea, mantenimiento y actualizaciones. 
              li
                i.fas.fa-caret-right.fa-lg.colr_5
                | Control de inventarios.
              li
                i.fas.fa-caret-right.fa-lg.colr_5
                | Integración con redes sociales.
              li
                i.fas.fa-caret-right.fa-lg.colr_5
                | Seguimiento comercial.
        .col-12.col-md-5.order-1.order-md-2(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema3/t3-16.png', alt='Texto que describa la imagen')

    h3 Instalación
         
    .bloque-texto-g.bgr_1.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/t3-18.jpg')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Para el uso correcto de estas plataformas es necesario contar con un conocimiento medio/avanzado de plataformas de ventas al igual que estar actualizado en las generalidades y conceptos más importantes de las ventas en líneas para poder alimentar a la plataforma de manera adecuada. Ejemplos de este tipo de plataformas son <em>Prestashop, Magento, WooCommerce</em>, etc.
    
    h3.p-4.bgr_19.mb-5 <em>E-commerce</em> con alojamiento externo

    .row.mb-5
      .col-12.col-md-9.order-2.order-md-1(data-aos="fade-right")
        p Este tipo de plataformas no requieren instalación o servidores propios ni tampoco un hosting ya que la tienda estará albergada en los servidores de una plataforma externa que se paga por mensualidades o anualidades más una comisión sobre las ventas según el plan contratado.
        .cajon.bgr.p-4
          p.mb-0.text-bold Ejemplos de este tipo de plataformas son: <em>Prestashop Cloud, Shopify, Xopie</em>, entre otras.
      .col-12.col-md-3.mb-3.mb-md-0.order-1.order-md-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/t3-19.svg', alt='Texto que describa la imagen')

    .row.mb-5
      .col-12.col-md-6.mb-3.mb-md-0(data-aos="flip-up")
        .tarjeta-avatar-b.mb-3.mb-md-0.h-100
          .tarjeta-avatar-b__img.pst_7.d-flex.justify-content-center
            img.img100(src='@/assets/curso/tema3/t3-20.svg' alt='AvatarTop')
          .tarjeta.bgr_16.pst_8.colr_3
            .p-5
              h4 Funcionalidad
              p Este tipo de plataformas son completas y funcionales, sus principales funciones son:
              ul.lista-ul.ms-4.mb-0
                li.mb-0 
                  i.lista-ul__vineta.colr_5
                  span.text-white Pasarela de pago.
                li.mb-0 
                  i.lista-ul__vineta.colr_5
                  span.text-white Promoción.
                li.mb-0 
                  i.lista-ul__vineta.colr_5
                  span.text-white SEO.
                li.mb-0 
                  i.lista-ul__vineta.colr_5
                  span.text-white Posicionamiento en buscadores.
                li.mb-0 
                  i.lista-ul__vineta.colr_5
                  span.text-white Facilidad de carga de productos.
                li.mb-0 
                  i.lista-ul__vineta.colr_5
                  span.text-white Control de inventarios.

      .col-12.col-md-6(data-aos="flip-down")
        .tarjeta-avatar-b.mb-3.mb-md-0
          .tarjeta-avatar-b__img.pst_7.d-flex.justify-content-center
            img.img100(src='@/assets/curso/tema3/t3-21.svg' alt='AvatarTop')
          .tarjeta.bgr_16.pst_8.colr_3
            .p-5
              h4 Desventaja
              p Se contrata con servidores externos que dependen de la seguridad de la empresa contratada y en algunas ocasiones su mantenimiento no es el adecuado, otras desventajas son:
              ul.lista-ul.ms-4.mb-0
                li.mb-0 
                  i.lista-ul__vineta.colr_5
                  span.text-white Cobro por comisión de venta.
                li.mb-0 
                  i.lista-ul__vineta.colr_5
                  span.text-white Mensajería con plataformas externas.
                li.mb-0 
                  i.lista-ul__vineta.colr_5
                  span.text-white Cobro por módulo adicional.
                li.mb-0 
                  i.lista-ul__vineta.colr_5
                  span.text-white Dominios públicos y no propios.
                li.mb-0 
                  i.lista-ul__vineta.colr_5
                  span.text-white Dificultad en la gestión de la base de datos.
                li.mb-0 
                  i.lista-ul__vineta.colr_5
                  span.text-white Algunas plataformas están en otros idiomas diferentes al español.
    
    h3.p-4.bgr_19.mb-5 <em>Marketplaces</em>

    p.mb-5 Son plataformas que agrupan a diversos tipos de vendedores que comercializan sus productos utilizando la infraestructura y servicios de estos portales sin necesidad de tomar los riesgos que implica vincular un alojamiento interno o externo dentro de los servidores de una compañía. Son una buena herramienta para comenzar a poner en marcha un comercio electrónico. Existen redes sociales que dentro de su propia infraestructura ofrecen el servicio de <em>marketplace</em> gratuito a sus usuarios. El costo de operación y uso de estas plataformas suele ser un pago mensual o una comisión por las ventas.  

    .bg_grad-14
      .row
        .col-12.col-md-4.mb-3.mb-md-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema3/t3-22.png', alt='Texto que describa la imagen')
        .col-12.col-md-8(data-aos="fade-left")
          h3 Ventaja
          p Son muy prácticas y ventajosas estas plataformas sobretodo para quienes no tienen el tiempo o los recursos para mantener al día este tipo de recursos, sus principales ventajas son:
          SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
            .tarjeta.bgr_8.p-4.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure
                    img.img18(src='@/assets/curso/tema3/01.svg' alt='AvatarTop')
                  figure.d-flex.justify-content-center
                    img.img90(src='@/assets/curso/tema3/t3-23.svg' alt='AvatarTop')
              p.mb-0.text-center Envíos y logística por parte del <em>marketplace.</em>
            .tarjeta.bgr_8.p-4.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure
                    img.img18(src='@/assets/curso/tema3/02.svg' alt='AvatarTop')
                  figure.d-flex.justify-content-center
                    img.img90(src='@/assets/curso/tema3/t3-24.svg' alt='AvatarTop')
              p.mb-0.text-center Integración y ventas por la plataforma.
            .tarjeta.bgr_8.p-4.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure
                    img.img18(src='@/assets/curso/tema3/03.svg' alt='AvatarTop')
                  figure.d-flex.justify-content-center
                    img.img90(src='@/assets/curso/tema3/t3-25.svg' alt='AvatarTop')
              p.mb-0.text-center SEO propio de la plataforma.
            .tarjeta.bgr_8.p-4.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure
                    img.img18(src='@/assets/curso/tema3/04.svg' alt='AvatarTop')
                  figure.d-flex.justify-content-center
                    img.img90(src='@/assets/curso/tema3/t3-26.svg' alt='AvatarTop')
              p.mb-0.text-center Reconocimiento global.
            .tarjeta.bgr_8.p-4.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure
                    img.img18(src='@/assets/curso/tema3/05.svg' alt='AvatarTop')
                  figure.d-flex.justify-content-center
                    img.img90(src='@/assets/curso/tema3/t3-27.svg' alt='AvatarTop')
              p.mb-0.text-center Confianza inversionista.
            .tarjeta.bgr_8.p-4.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure
                    img.img18(src='@/assets/curso/tema3/06.svg' alt='AvatarTop')
                  figure.d-flex.justify-content-center
                    img.img90(src='@/assets/curso/tema3/t3-28.svg' alt='AvatarTop')
              p.mb-0.text-center Facilidad de pago.
            .tarjeta.bgr_8.p-4.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure
                    img.img18(src='@/assets/curso/tema3/07.svg' alt='AvatarTop')
                  figure.d-flex.justify-content-center
                    img.img90(src='@/assets/curso/tema3/t3-29.svg' alt='AvatarTop')
              p.mb-0.text-center Usabilidad optimizada.

    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Intermediarios y costos
    
    .bloque-texto-g.bgr_1.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/t3-30.jpg')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Los <em>marketplaces</em> son una realidad notable en la actualidad como lo dice Pukkas (2021) “podríamos decir que el auge para vender en <em>marketplaces</em> como Amazon se basa en lo siguiente: Amazon tiene a los usuarios y las visitas (entre otros servicios que ofrece para vendedores) y nosotros podemos poner nuestro producto en la plataforma (con algunas normas que deberemos seguir por supuesto)”. No es solo Amazon,  aunque es uno de los más grandes referentes, a continuación se realizará una lista con ejemplos de las principales plataformas y <em>marketplaces</em> analizando sus ventajas, desventajas y costos de operación:

    .bg_grad-12.mb-5
      p.text-bold.p-4.bgr_18.colr_2.mb-5 Principales <em>Marketplaces</em> del mercado 

      .row.justify-content-between
        .col-12.col-md-2
          figure.d-flex.justify-content-center
            img(src='@/assets/curso/tema3/t3-31.svg' alt='AvatarTop')
        .col-12.col-md-2
          figure.d-flex.justify-content-center
            img(src='@/assets/curso/tema3/t3-32.svg' alt='AvatarTop')
        .col-12.col-md-2
          figure.d-flex.justify-content-center
            img(src='@/assets/curso/tema3/t3-33.svg' alt='AvatarTop')
        .col-12.col-md-2
          figure.d-flex.justify-content-center
            img(src='@/assets/curso/tema3/t3-34.svg' alt='AvatarTop')
        .col-12.col-md-2
          figure.d-flex.justify-content-center
            img(src='@/assets/curso/tema3/t3-35.svg' alt='AvatarTop')

    h3.p-4.bgr_19.mb-5 Amazon

    .bg_grad-13.mb-5
      .row(data-aos="flip-up")
        .col-12.col-md-3
          figure.d-flex.justify-content-center
            img(src='@/assets/curso/tema3/t3-31.svg' alt='AvatarTop')
        .col-12.col-md-9.d-flex.align-items-center
          p.mb-0 Gigante tecnológico de los EEUU con presencia en 13 países que incluyen Reino Unido, China y España. Alberga millones de artículos a la venta al igual que diferentes márgenes de precios. Muchas compañías manufactureras alrededor del mundo como su principal canal de ventas. 

    TabsA.color-acento-botones.mb-5(data-aos="fade-right")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Ventajas")
        .row
          h4.mb-4 Ventajas
          .col-xl-2.mb-3.mb-md-0
            figure.d-flex.justify-content-center
              img.img140(src='@/assets/curso/tema3/t3-37.svg', alt='Texto que describa la imagen')
          .col-xl-10
            p.mb-0 Dentro de sus ventajas se encuentran:
              ul.ms-3.mt-3.lista-ul--color
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Público potencial de millones de clientes en todo el mundo.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Seguridad tecnológica y protección contra fraudes.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Soporte técnico para el comprador y el vendedor.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Facilidad en envíos y métodos de pago.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Posibilidad de incluir información detallada y precios mínimos y máximos.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Contar con la trayectoria de una de las empresas más grandes del mundo.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Costos")
        .row
          h4.mb-4 Costos
          .col-xl-2.mb-3.mb-md-0
            figure.d-flex.justify-content-center
              img.img140(src='@/assets/curso/tema3/t3-36.svg', alt='Texto que describa la imagen')
          .col-xl-10.mt-3
            p.mb-0 Actualmente cuenta con dos planes de costo. El primero por comisión por venta (0.99 dólares por venta realizada) o 39.99 dólares mensuales por un plan profesional que incluye más servicios. 
      .tarjeta.color-acento-botones--borde.p-4(titulo="Desventajas")
        .row
          h4.mb-4 Desventajas
          .col-xl-2.mb-3.mb-md-0
            figure.d-flex.justify-content-center
              img.img140(src='@/assets/curso/tema3/t3-38.svg', alt='Texto que describa la imagen')
          .col-xl-10
            p.mb-0 En cuanto a los puntos débiles de esta plataforma se pueden mencionar:
              ul.ms-3.mt-3.lista-ul--color
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Competencia fuerte y abundante.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Costo importante de comisión para productos de bajo costo.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | No hay posibilidad de crear bases de datos de clientes.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Estricto control de calidad y baja tolerancia a los errores.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Estricto cumplimiento de términos y condiciones para no disminuir calificación.

    h3.p-4.bgr_19.mb-5 Redes sociales

    .bg_grad-13.mb-5
      .row(data-aos="flip-up")
        .col-12.col-md-3
          figure.d-flex.justify-content-center
            img(src='@/assets/curso/tema3/t3-32.svg' alt='AvatarTop')
        .col-12.col-md-9.d-flex.align-items-center
          p.mb-0 Muchas de las principales redes sociales como Facebook, Google e Instagram cuentan con sus propios marketplaces integrados que pueden ser utilizados por sus usuarios para comercializar bienes y servicios con otros usuarios. Esta se posiciona actualmente como una de las formas más rápidas y sencillas para publicar artículos o servicios a la venta. Están disponibles prácticamente a nivel mundial lo cual representa una plaza con gran potencial.
    
    TabsA.color-acento-botones.mb-5(data-aos="fade-left")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Ventajas")
        .row
          h4.mb-4 Ventajas
          .col-xl-2
            figure
              img.img140(src='@/assets/curso/tema3/t3-37.svg', alt='Texto que describa la imagen')
          .col-xl-10
            p.mb-0 Dentro de sus principales ventajas se encuentran:
              ul.ms-3.mt-3.lista-ul--color
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Publicación sin costo.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Se pueden poner en marcha campañas de publicidad en la misma plataforma.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Capacidad de pagar para figurar más.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Tácticas para promocionar productos con base en el funcionamiento de algoritmos.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Integración de interacciones más reales.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Segmentación.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Costos")
        .row
          h4.mb-4 Costos
          .col-xl-2
            figure
              img.img140(src='@/assets/curso/tema3/t3-36.svg', alt='Texto que describa la imagen')
          .col-xl-10.mt-3.mt-md-4
            p.mb-0 Estas son aplicaciones que trabajan de manera gratuita. 
      .tarjeta.color-acento-botones--borde.p-4(titulo="Desventajas")
        .row
          h4.mb-4 Desventajas
          .col-xl-2
            figure
              img.img140(src='@/assets/curso/tema3/t3-38.svg', alt='Texto que describa la imagen')
          .col-xl-10
            p.mb-0 En cuanto a los puntos débiles de esta plataforma se pueden mencionar:
              ul.ms-3.mt-3.lista-ul--color
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Menor protección contra fraude.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Logística y envíos deben ser asumidos por el vendedor directamente.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Los anuncios deben publicarse con cierta periodicidad ya que no son permanentes.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | No se puede acceder a la base de datos de clientes.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  span Mayor exposición a comentarios negativos y <em>spam</em>.
    
    h3.p-4.bgr_19.mb-5 Wix

    .bg_grad-13.mb-5
      .row(data-aos="flip-up")
        .col-12.col-md-3
          figure.d-flex.justify-content-center
            img(src='@/assets/curso/tema3/t3-33.svg' alt='AvatarTop')
        .col-12.col-md-9.d-flex.align-items-center
          p.mb-0 Plataforma de comercio electrónico en donde sus usuarios crean con la ayuda de herramientas y plantillas sitios web HTML5 para promocionar iniciativas, productos, servicios, entre otros. Los resultados pueden ser muy positivos para emprendedores que además de encontrar una plataforma para ventas, encuentran una herramienta de comunicación digital que puede potenciar varias estrategias de la compañía. 

    TabsA.color-acento-botones.mb-5(data-aos="fade-right")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Ventajas")
        .row
          h4.mb-4 Ventajas
          .col-xl-2
            figure
              img.img140(src='@/assets/curso/tema3/t3-37.svg', alt='Texto que describa la imagen')
          .col-xl-10
            p.mb-0 Dentro de sus principales ventajas se encuentran:
              ul.ms-3.mt-3.lista-ul--color
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Integración de herramientas de diseño que permiten desarrollar una imagen más llamativa y que se alinee con la estética de la marca.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Personalización del entorno digital.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Interfaz amigable.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  span Uso de <em>widgets</em>, botones y herramientas que pueden contribuir positivamente a la experiencia de compra.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Seguridad en transacciones (anti fraude).
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Capacidad de integración con otras redes sociales y plataformas.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Servicios adicionales como cuentas de usuarios con diferentes permisos, espacio de almacenamiento en la nube, reportes de ventas, entre otros.

      .tarjeta.color-acento-botones--borde.p-4(titulo="Costos")
        .row
          h4.mb-4 Costos
          .col-xl-2
            figure
              img.img140(src='@/assets/curso/tema3/t3-36.svg', alt='Texto que describa la imagen')
          .col-xl-10.mt-3.mt-md-4
            p.mb-0 Planes de negocios y <em>e-commerce</em> desde 9.50 a 25 dólares mensuales. 
      .tarjeta.color-acento-botones--borde.p-4(titulo="Desventajas")
        .row
          h4.mb-4 Desventajas
          .col-xl-2
            figure
              img.img140(src='@/assets/curso/tema3/t3-38.svg', alt='Texto que describa la imagen')
          .col-xl-10
            p.mb-0 En cuanto a los puntos débiles de esta plataforma se pueden mencionar:
              ul.ms-3.mt-3.lista-ul--color
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Es necesario un conocimiento básico de diseño para uso correcto de algunas herramientas.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Se requiere un conocimiento básico de programación para desarrollo de herramientas y opciones avanzadas.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Si se quiere migrar el sitio web a otro servidor, se encontrarán limitaciones.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Los sitios web de Wix pueden ser más difíciles de indexar en buscadores lo cual limita su posicionamiento.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Algunas plantillas pueden resultar repetitivas entre usuarios.
    
    h3.p-4.bgr_19.mb-5 Mercado libre

    .bg_grad-13.mb-5
      .row(data-aos="flip-up")
        .col-12.col-md-3
          figure.d-flex.justify-content-center
            img(src='@/assets/curso/tema3/t3-34.svg' alt='AvatarTop')
        .col-12.col-md-9.d-flex.align-items-center
          p.mb-0 Plataforma de <em>e-commerce</em> más popular en Latinoamérica, cuenta con su propio sistema de pagos lo cual aumenta su solidez y respuesta ante intentos de fraude. También cuenta con su propio centro de distribución lo cual facilita la logística de envíos y entregas. Así mismo la plataforma cuenta con varios tipos de cuenta a elegir por el usuario que tienen diferentes precios. Estos planes aumentan la visibilidad de los productos a comercializar dependiendo de la categoría a la cual se pertenezca. 

    TabsA.color-acento-botones.mb-5(data-aos="fade-left")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Ventajas")
        .row
          h4.mb-4 Ventajas
          .col-xl-2
            figure
              img.img140(src='@/assets/curso/tema3/t3-37.svg', alt='Texto que describa la imagen')
          .col-xl-10
            p.mb-0 Dentro de sus principales ventajas se encuentran:
              ul.ms-3.mt-3.lista-ul--color
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Posicionamiento a nivel latinoamericano y soporte en moneda local.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Excelente respuesta a buscadores.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  span Capacidad de recibir <em>reviews</em> y calificaciones.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Seguridad en transacciones.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Capacidad de integración con otras redes sociales y plataformas.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Servicios adicionales como cuentas de usuarios con diferentes permisos, espacio de almacenamiento en la nube, reportes de ventas, entre otros.

      .tarjeta.color-acento-botones--borde.p-4(titulo="Costos")
        .row
          h4.mb-4 Costos
          .col-xl-2
            figure
              img.img140(src='@/assets/curso/tema3/t3-36.svg', alt='Texto que describa la imagen')
          .col-xl-10.mt-3.mt-md-4
            p.mb-0 Comisiones por venta entre el 11 y el 30% según el tipo de plan y producto. 
      .tarjeta.color-acento-botones--borde.p-4(titulo="Desventajas")
        .row
          h4.mb-4 Desventajas
          .col-xl-2
            figure
              img.img140(src='@/assets/curso/tema3/t3-38.svg', alt='Texto que describa la imagen')
          .col-xl-10
            p.mb-0 En cuanto a los puntos débiles de esta plataforma se pueden mencionar:
              ul.ms-3.mt-3.lista-ul--color
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Altas comisiones en el mercado.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | A pesar del sistema de seguridad que ofrece existe una alta tasa de fraudes y estafa.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Los envíos tienen que realizarse de manera rápida (48h) de lo contrario se incurrirá en penalidades.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Alta y feroz competencia entre usuarios por ofrecer precios bajos.
    
    h3.p-4.bgr_19.mb-5 Linio

    .bg_grad-13.mb-5
      .row(data-aos="flip-up")
        .col-12.col-md-3
          figure.d-flex.justify-content-center
            img(src='@/assets/curso/tema3/t3-35.svg' alt='AvatarTop')
        .col-12.col-md-9.d-flex.align-items-center
          p.mb-0 Linio es una de las plataformas que más se posiciona actualmente en el mercado de <em>marketplaces</em>. Está en cuatro países de Latinoamérica, tiene más de 20 millones de visitas acumuladas y se especializa en vender productos completamente nuevos y originales. Ha crecido mucho en la región en los últimos años, posicionándose como una de las mejores alternativas del mercado. Cuenta con un sitio para ventas corporativas.
 
    TabsA.color-acento-botones.mb-5(data-aos="fade-right")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Ventajas")
        .row
          h4.mb-4 Ventajas
          .col-xl-2
            figure
              img.img140(src='@/assets/curso/tema3/t3-37.svg', alt='Texto que describa la imagen')
          .col-xl-10
            p.mb-0 Dentro de sus principales ventajas se encuentran:
              ul.ms-3.mt-3.lista-ul--color
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Posicionamiento a nivel latinoamericano y soporte en moneda local.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  span <em>Chat</em> con usuarios para resolver dudas.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Protección anti fraude.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Integración con otras plataformas de alojamiento interno como Shopify.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Ofrece diversas opciones de pago.

      .tarjeta.color-acento-botones--borde.p-4(titulo="Costos")
        .row
          h4.mb-4 Costos
          .col-xl-2
            figure
              img.img140(src='@/assets/curso/tema3/t3-36.svg', alt='Texto que describa la imagen')
          .col-xl-10.mt-3.mt-md-4
            p.mb-0 Comisiones por venta de del 6 al 22% según tipo de plan y producto. 
      .tarjeta.color-acento-botones--borde.p-4(titulo="Desventajas")
        .row
          h4.mb-4 Desventajas
          .col-xl-2
            figure
              img.img140(src='@/assets/curso/tema3/t3-38.svg', alt='Texto que describa la imagen')
          .col-xl-10
            p.mb-0 En cuanto a los puntos débiles de esta plataforma se pueden mencionar:
              ul.ms-3.mt-3.lista-ul--color
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Altas comisiones en el mercado.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Normas y políticas de uso muy estrictas.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Debe estar constituido como empresa.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Se requiere la infraestructura para entregar en máximo 48 horas.
                li.mb-0
                  i.fas.fa-caret-right.fa-lg.colr_5
                  | Las cuentas pueden ser dadas de bajas directamente por la plataforma si no se cumple estrictamente con los términos y condiciones.
              
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
