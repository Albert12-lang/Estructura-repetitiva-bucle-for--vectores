function calcularInventario() {
  // 1️⃣ Crear un vector para guardar los precios
  let precios = [];

  // 2️⃣ Usar un bucle Para para llenar el vector
  for (let i = 1; i <= 6; i++) {
    let precio = parseFloat(document.getElementById("precio" + i).value);
    precios.push(precio);
  }

  // 3️⃣ Mostrar los precios ingresados
  let texto = "Precios ingresados: ";
  for (let i = 0; i < precios.length; i++) {
    texto += precios[i] + " ; ";
  }

  // 4️⃣ Calcular el valor total del inventario
  let total = 0;
  for (let i = 0; i < precios.length; i++) {
    total += precios[i];
  }

  // 5️⃣ Mostrar el resultado en pantalla
  document.getElementById("resultado").innerHTML =
    texto + "<br><br>Valor total del inventario: $" + total.toFixed(2);
}