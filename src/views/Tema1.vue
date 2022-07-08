<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.colr
        span 1
      h1  Promoción de productos: conceptos básicos
    
    .bg_grad-01.mb-5
      .row
        .col-12.col-md-8.mb-3.mb-md-0
          span.colr_1.text-bold El proceso de promoción de un producto o servicio es una de las etapas más importantes del marketing digital ya que es la principal manera de comunicar al público objetivo sus características, propiedades, beneficios y cualidades. 
          | Una estrategia de promoción también puede ponerse en marcha para potenciar la presentación o introducción de un nuevo producto o servicio. 
          .row.mt-4 
            .col-12.col-md-1
              figure.d-flex.justify-content-center
                img.d-none.d-md-flex(src='@/assets/curso/tema1/t1-1.svg', alt='1-1')
            .col-12.col-md-11
              span.etiqueta.text-bold Algunos estudiosos de publicidad y marketing, como McCarthy y Perreault, definen la promoción como la acción de transmitir información entre el vendedor y los compradores potenciales u otros miembros del canal para influir en sus actitudes y comportamientos. 
              span.colr_1.text-bold (Rockcontent, 2017)
              | ; todo esto se hace por medio de la creación de una campaña de comunicación sólida y efectiva que incluye: publicaciones en redes sociales, medios impresos, publicidad pagada en internet, ventas personales, relaciones públicas y estrategias comerciales, todo lo anterior dentro de una estrategia. 
              span.text-bold El principal resultado es incidir en el proceso de compra y atraer la atención del cliente.
        .col-12.col-md-4
          figure
            img(src='@/assets/curso/tema1/t1-2.png', alt='1-1')

    .bg_grad-02
      .bloque-texto-g.bgr_1.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/t1-3.jpg')})`}"
        )
        .bloque-texto-g__texto.p-5
          p.mb-0 El proceso de promoción de venta de un producto o servicio también se relaciona con las necesidades que se planteen para el cliente ya que a partir del ofrecimiento a dicha solución se estará generando recordación de marca. La promoción también se encarga de explotar esta recordación para influenciar positivamente en la experiencia y la decisión de compra con técnicas de psicología del consumidor. 
      p Así mismo, es muy importante conocer a fondo las características positivas que tiene el producto o servicio para influenciar al consumidor y explicarle por qué es la mejor opción en el mercado. A continuación, se mencionan algunos componentes que hacen parte de una campaña de promoción de productos y servicios:  
  
      TabsB.color-acento-contenido.mb-5
        .py-4.py-md-5(titulo="Marketing directo" :icono="require('@/assets/curso/tema1/t1-4.svg')")
          .row
            .col-md-8.mb-4.mb-md-0.p-4.d-flex.align-items-center
              div
                h4 Marketing directo
                p.mb-0 Se establece un contacto con el cliente potencial a través de <em>newsletters</em>, mensajería instantánea, llamadas telefónicas.         
            .col-md-4
              figure
                img(src='@/assets/curso/tema1/t1-10.svg', alt='Texto que describa la imagen')
        .py-4.py-md-5(titulo="Publicidad" :icono="require('@/assets/curso/tema1/t1-5.svg')")
          .row
            .col-md-8.mb-4.mb-md-0.p-4.d-flex.align-items-center
              div
                h4 Publicidad
                p.mb-0 La publicidad se presenta durante el proceso de promoción mediante campañas en diferentes medios de comunicación anuncios en medios digitales, redes sociales, realización de piezas digitales, videos virales, contenido multimedia que no solo se albergue en plataformas sino que también aparezca replicado en otros portales, <em>newsletters</em>, etc. Este componente es de gran alcance y se identifica claramente la marca en esta publicidad, así sea de manera implícita en campañas de expectativas. 
            .col-md-4
              figure
                img(src='@/assets/curso/tema1/t1-11.svg', alt='Texto que describa la imagen')
        .py-4.py-md-5(titulo="Promoción de ventas" :icono="require('@/assets/curso/tema1/t1-6.svg')")
          .row
            .col-md-8.mb-4.mb-md-0.p-4.d-flex.align-items-center
              div
                h4 Promoción de ventas
                p.mb-0 A través de descuentos, ofertas, renovaciones automáticas, bundles, plazos de pago, créditos, el cliente podrá ser motivado a tomar la decisión de compra rápidamente así como mejorar su experiencia de compra.  
            .col-md-4
              figure
                img(src='@/assets/curso/tema1/t1-12.svg', alt='Texto que describa la imagen')
        .py-4.py-md-5(titulo="Relaciones públicas" :icono="require('@/assets/curso/tema1/t1-7.svg')")
          .row
            .col-md-8.mb-4.mb-md-0.p-4.d-flex.align-items-center
              div
                h4 Relaciones públicas
                p.mb-0 Las relaciones públicas pueden abarcar desde acercamiento a personalidades de marca para crear alianzas estratégicas hasta crear publicaciones de redes sociales junto a <em>influencers</em> digitales a cambio de crédito para gastar en la marca. El objetivo es establecer una proyección aspiracional hacia el público objetivo que permita que este se identifique plenamente con el producto o servicio ofrecido.
            .col-md-4
              figure
                img(src='@/assets/curso/tema1/t1-13.svg', alt='Texto que describa la imagen')
        .py-4.py-md-5(titulo="Venta personal" :icono="require('@/assets/curso/tema1/t1-8.svg')")
          .row
            .col-md-8.mb-4.mb-md-0.p-4.d-flex.align-items-center
              div
                h4 Venta personal
                p.mb-0 Se basa en establecer una conexión con el comprador que sea lo más directa posible, a través del equipo humano. Esto puede darse en entornos reales o virtuales: ferias, convenciones, reuniones de venta, etc. 
            .col-md-4
              figure
                img(src='@/assets/curso/tema1/t1-14.svg', alt='Texto que describa la imagen')
        .py-4.py-md-5(titulo="Eventos y experiencias" :icono="require('@/assets/curso/tema1/t1-9.svg')")
          .row
            .col-md-8.mb-4.mb-md-0.p-4.d-flex.align-items-center
              div
                h4 Eventos y experiencias
                p.mb-0 Por medio de eventos presenciales o virtuales en donde el cliente haga parte de un entorno, este puede identificarse más directamente con el producto y servicio y motivarse a adquirirlo. Adicionalmente, las experiencias interactivas que tenga el cliente tanto con la marca como con otros usuarios, que compartan reacciones positivas del producto o servicio, también pueden lograr este objetivo. Otros ejemplos de eventos y experiencias son las ferias virtuales o las visitas a puntos de venta o <em>showrooms</em>.
            .col-md-4
              figure
                img(src='@/assets/curso/tema1/t1-15.svg', alt='Texto que describa la imagen')

    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1  Tipos de promoción
    
    figure.position-relative.mb-5(data-aos="zoom-in-up")
      img(src='@/assets/curso/tema1/t1-16.png', alt='introducción')
      .row.justify-content-center
        .col-12.col-md-10
          .bgr_2
            p.m-0.p-4.text-bold Además de los componentes ya mencionados, existen tipos de promoción que van direccionados a abordar una necesidad relacionada con el cliente y motivar a que se tome la decisión de compra, las siguientes son las formas más frecuentes de publicar un productos de manera publicitaria en los diferentes ambientes del mercado: 
    
    .row.justify-content-center
      .col-12.col-md-10
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/t1-17.svg', alt='Texto que describa la imagen')
          .tarjeta.bgr_3(x="4%" y="80%" numero="1")
            h4.mb-0.bgr_4.p-3.text-center.colr_2 Promoción en precio
            p.p-3.text-center Al bajar el precio de un producto o servicio se busca reactivar el interés de compra del cliente por medio del cambio en el valor adquisitivo. Este tipo de promoción tiene un rápido impacto en el mercado y su efecto es casi inmediato. Acá la idea es destacar la obtención de un producto o servicio a un bajo o mismo valor con un mayor beneficios. Por ejemplo todo a mitad de precio.
          .tarjeta.bgr_3(x="4%" y="53%" numero="2")
            h4.mb-0.bgr_5.p-3.text-center.colr_2 Promoción en cantidad
            p.p-3.text-center Al crear promociones en el número de unidades o tiempo que se recibe de un producto o servicio, motivan al consumidor a comprar. También incide en la manera en la que el cliente interactúa con las publicaciones o comunicaciones que se realicen en las diferentes plataformas de venta o redes sociales. Ejemplo: compre 3 y lleve uno gratis.
          .tarjeta.bgr_3(x="14%" y="27%" numero="3")
            h4.mb-0.bgr_6.p-3.text-center.colr_2 Promoción en servicio post-venta
            p.mb-0.p-3.text-center Es la oportunidad que se le da al cliente de ser un cliente especial si toma la oferta, ese cliente especial tiene unas garantías adicionales en el trato luego de hacer la compra de algún producto. Por ejemplo: compre hoy y lleve sin costo dos años de mantenimiento para su vehículo.
          .tarjeta.bgr_3(x="31%" y="19%" numero="4")
            h4.mb-0.bgr_4.p-3.text-center.colr_2 Promoción por duración o fidelidad de marca
            p.p-3.text-center Este tipo de promoción se basa en ofrecerle al cliente promociones y descuentos que estén destinados a premiar su buen comportamiento de compra, tiempo de uso de la marca, monto por el cual ha comprado, etc. Esto no solo genera un efecto de fidelización en el cliente, sino que también crea lazos sólidos con el cliente y establece relaciones más duraderas. Este tipo de promoción tiene diferentes formas como cupones, descuentos y sorteos. 
          .tarjeta.bgr_3(x="47%" y="19%" numero="5")
            h4.mb-0.bgr_5.p-3.text-center.colr_2 Promoción de obsequio
            p.p-3.text-center Este tipo de promoción se basa en la entrega de un ejemplar, producto, tiempo de servicio o pase gratuito y sin costo alguno que estimula al cliente a comprar un producto determinado. Por ejemplo, por la compra de un auto el cliente recibe una póliza de seguro gratuita durante un año.
          .tarjeta.bgr_3(x="63%" y="25%" numero="6")
            h4.mb-0.bgr_6.p-3.text-center.colr_2 Promoción por demostraciones
            p.mb-0.p-3.text-center El objetivo de este tipo de promoción es brindar una interacción personalizada al cliente en donde tenga la oportunidad de tener una experiencia previa con el producto o servicio antes de adquirirlo. Por ejemplo, ofrecer un tiempo de prueba gratuito para utilizar el producto o servicio, un <em>test drive</em>, un evento de <em>premiere</em> exclusivo, etc.
          .tarjeta.bgr_3(x="78%" y="33%" numero="7")
            h4.mb-0.bgr_4.p-3.text-center.colr_2 Promoción por cupones
            p.p-3.text-center La promoción por cupones es similar a la promoción por precio. En este caso los cupones se pueden redimir para diferentes usos incluyendo descuentos, o productos gratuitos. Por medio de estos cupones se pretende alargar la experiencia de compra así como fidelizar a los clientes en un tiempo determinado, debido a que los cupones tienen por lo general un tiempo de vigencia.
          .tarjeta.bgr_3(x="89%" y="53%" numero="8")
            h4.mb-0.bgr_5.p-3.text-center.colr_2 Promoción por novedad
            p.p-3.text-center Cuando se lanza un producto o servicio nuevo, se genera una promoción por novedad que atrae al cliente encendiendo su interés por algo nuevo. En el caso de volver a posicionar un producto en el mercado por medio del <em>re-branding</em>, el cliente pondrá su interés en la característica que se renueve del producto sea esta el empaque, una nueva fórmula, un nuevo algoritmo de uso, etc.
          .tarjeta.bgr_3(x="96%" y="78%" numero="9")
            h4.mb-0.bgr_6.p-3.text-center.colr_2 Promoción por dinámicas
            p.mb-0.p-3.text-center A través de activaciones, actividades, juegos y dinámicas, se crean espacios de interacción con el cliente generando mayor presencia y recordación en el <em>top of mind</em> del público objetivo. Esto puede traer beneficios potenciales como mejorar la experiencia de compra, incrementar las ventas, incrementar el voz a voz, entre otras. 

    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2  Características y aplicabilidad
    
    .bg_grad-03.mb-5
      .row.mb-5
        .col-12.col-md-4.mb-3.mb-md-0
          figure
            img(src='@/assets/curso/tema1/t1-18.png', alt='Texto que describa la imagen')
        .col-12.col-md-8
          p.mb-0.text-bold A pesar de que las promociones son comunes dentro de una estrategia de marketing, es importante determinar los objetivos que se quieren alcanzar por medio de estas promociones. Si bien las promociones cuentan con mucha versatilidad, estas no deben usarse indiscriminadamente ya que pueden impactar negativamente en el área financiera de la empresa. 
          .row.mt-5
            .col-12.col-md-1
              figure
                img.d-none.d-md-flex(src='@/assets/curso/tema1/t1-1.svg', alt='Texto que describa la imagen')
            .col-12.col-md-11
              span Para que esto no ocurra la estrategia de promoción debe alinearse con la estrategia de ventas y el plan de marketing. Luego de haberse llevado a cabo es de gran ayuda evaluar el impacto que estas han tenido dentro de la situación actual de la compañía para determinar si son beneficiosas o no. En definitiva, 
              span.etiqueta.text-bold “la promoción no es ni buena ni mala. Puede ser eficaz o ineficaz en tanto que cumpla o no los objetivos que se pretenden. Para fijar estos objetivos, es imprescindible tener en cuenta las ventajas y los inconvenientes que se acaban de señalar” 
              span.colr_1.text-bold  Ceupe (2022). 
              |  Esto permite hablar de los problemas que pueden resolver las promociones y de los casos en los que no es conveniente usarlas.

      .cajon.bgr_7.p-4.mb-5
        p.mb-0 Para garantizar el éxito de una estrategia de promoción se debe apelar a las emociones de una forma precisa, clara y concreta. Además, se debe especificar un tiempo de vigencia para destacar la necesidad relacionada con el producto en busca de generar en el cliente una sensación de urgencia de uso motivada por una promoción que dejará de existir eventualmente. Cuando se pone en marcha de manera efectiva una estrategia de promoción, se logra que el producto o servicio tenga un mayor posicionamiento en redes sociales y por ende, un mayor flujo de compra, un aumento en las ventas y una atracción a nuevos clientes potenciales.  

      .bloque-texto-g.bgr_1.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img.pst(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/t1-19.jpg')})`}"
        )
        .bloque-texto-g__texto.p-5.pst_1
          p.mb-0 Una estrategia promocional debe desarrollarse teniendo en cuenta varios factores como el público objetivo. Luego de saber a qué tipo de clientes se dirige, se podrá establecer el tono de la estrategia de promoción y los intereses y necesidades a los cuales se va a dar solución. El siguiente paso es delimitar los tiempos de vigencia y duración de las promociones. Es importante tener en cuenta las siguientes preguntas: 

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.bgr_8.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8.d-flex.justify-content-center
            img.img100(src='@/assets/curso/tema1/t1-20.svg' alt='AvatarTop')
        p.text-center ¿Cuál es la estrategia de promoción de la competencia?
      .tarjeta.bgr_8.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8.d-flex.justify-content-center
            img.img100(src='@/assets/curso/tema1/t1-21.svg' alt='AvatarTop')
        p.text-center ¿Cuándo es el mejor momento para promocionar el producto o servicio?
      .tarjeta.bgr_8.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8.d-flex.justify-content-center
            img.img100(src='@/assets/curso/tema1/t1-22.svg' alt='AvatarTop')
        p.text-center ¿A qué tipo de medios se debe abordar para alcanzar compradores a través de anuncios pagos?
      .tarjeta.bgr_8.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8.d-flex.justify-content-center
            img.img100(src='@/assets/curso/tema1/t1-23.svg' alt='AvatarTop')
        p.text-center ¿Cómo se pueden enviar mensajes de marketing a los compradores potenciales?
      .tarjeta.bgr_8.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8.d-flex.justify-content-center
            img.img100(src='@/assets/curso/tema1/t1-24.svg' alt='AvatarTop')
        p.text-center ¿Cómo influye el entorno digital en el desarrollo de la estrategia de promoción?
      .tarjeta.bgr_8.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8.d-flex.justify-content-center
            img.img100(src='@/assets/curso/tema1/t1-25.svg' alt='AvatarTop')
        p.text-center ¿Es mejor usar medios tradicionales para promover el producto? 


    
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
