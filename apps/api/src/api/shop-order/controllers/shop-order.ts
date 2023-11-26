/**
 * shop-order controller
 */

import { factories } from '@strapi/strapi';

// const orderCreatedTemplate = {
//   subject: 'Создан новый заказ на  <%= data.totalAmount %> ₽',
//   text: `Создан новый заказ на  <%= data.totalAmount %> ₽`,
//   html: `
//   <div style='display: flex; gap: 4em; flex-wrap: wrap;'>
//     <div style='display: flex; gap: 4em;'>
//         <div style='display:flex; flex-direction:column; justify-content: space-between;'>
//             <div style='display:flex; flex-direction:column; gap:1em;'>
//              <h2>Выбранные товары</h2>
//                 <ul style='padding: 0; margin: 0;  '>
//                     <%= data.list %>
//                 </ul>
//             </div>
//             <div style='display:flex; flex-direction: column;'>
//                   <h2>Итого: <%= data.totalAmount %> ₽</div>
//             </div>
//         </div>
//         <div style='display:flex; flex-direction:column; gap: 2em;'>
//             <div>
//                 <h2>Контактные данные</h2>
//                 <ul style='padding: 0; margin: 0;  '>
//                       <li style='display:flex;gap:1em'> Имя и фамилия: <div style='display:flex;'> <span style='font-weight: 700;'> <%= order.firstName %></span>  <span style='font-weight: 700;'> <%= order.lastName %></span></div> </li>
//                       <li style='display:flex;gap:1em'> Email: <span style='font-weight: 700;'><%= order.email %> </span></li>
//                       <li style='display:flex;gap:1em'> Телефон:<span style='font-weight: 700;'><%= order.phone %> </span></li>
//                 </ul>
//             </div>
//             <div>
//                 <h2>Информация о доставке</h2>
//                 <ul style='padding: 0; margin: 0;  '>
//                     <li style='display:flex;gap:1em'>Страна: <span style='font-weight: 700;'> <%= order.country %></span></li>
//                     <li style='display:flex;gap:1em'>Город: <span style='font-weight: 700;'> <%= order.city %></span></li>
//                     <li style='display:flex;gap:1em'>Адрес: <span style='font-weight: 700;'><%= order.address %></span>  </li>
//                     <li style='display:flex;gap:1em'>Почтовый код: <span style='font-weight: 700;'><%= order.postcode %></span> </li>
//                 </ul>
//             </div>
//         </div>
//         </div>
//     </div>
//   `,
// };

export default factories.createCoreController('api::shop-order.shop-order', () => ({
  // async create(ctx) {
  //   const { products, email, lastName, firstName, phone, country, city, address, postcode } = ctx.request.body.data;
  //   try {
  //     const lineItems = await Promise.all(
  //       products.map(async (product) => {
  //         const item = await strapi
  //           .service("api::shop-item.shop-item")
  //           .findOne(product.productId)
  //         return {
  //           price_data: {
  //             product_data: {
  //               title: item.title,
  //             },
  //             unit_amount: item.price,
  //             total_amount: product.quantity * item.price,
  //           },
  //           quantity: product.quantity,
  //         };
  //       })
  //     );
  //     const totalQuantity = lineItems.reduce((partialSum, a) => {
  //       return partialSum + a.quantity
  //     }, 0);
  //     const totalAmount = lineItems.reduce((partialSum, a) => {
  //       return partialSum + a.price_data.total_amount
  //     }, 0);
  //     let arrayItems = "";
  //     let n;
  //     for (n in lineItems) {
  //       arrayItems += "<div style='display: flex; gap: 2em;'>" +
  //         "<div style='display: flex; gap: 0.5em'>" + "Название товара: " + "<span style='font-weight: 700;'>" + lineItems[n].price_data.product_data.title + "</span>" + "</div>" +
  //         "<div style='display: flex; gap: 0.5em'>" + "Стоимость за товар: " + "<span style='font-weight: 700;'>" + lineItems[n].price_data.unit_amount + "</span>" + "</div>" +
  //         "<div style='display: flex; gap: 0.5em'>" + "Количество: " + "<span style='font-weight: 700;'>" + lineItems[n].quantity + "</span>" + "</div>" +
  //         "<div style='display: flex; gap: 0.5em'>" + "Полная стоимость: " + "<span style='font-weight: 700;'>" + lineItems[n].price_data.total_amount + "</span>" + "</div>"
  //         + "</div>";
  //     }
  //     lineItems && await strapi.plugin('email').service('email').sendTemplatedEmail({
  //       to: 'info@radiolocal.online',
  //     }, orderCreatedTemplate, { data: { totalQuantity, totalAmount, list: arrayItems }, order: { phone, country, city, address, postcode, email, firstName, lastName } });
  //     const data = await strapi
  //       .service("api::shop-order.shop-order")
  //       .create({ data: { ...ctx.request.body, products } });
  //     return data
  //   } catch (error) {
  //     ctx.response.status = 500;
  //     return { error };
  //   }
  // }
}));
