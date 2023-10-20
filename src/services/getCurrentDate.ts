export default function getCurrentDate() {
    const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    const data = new Date();
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = meses[data.getMonth()];
    const ano = data.getFullYear();
    return `${dia} ${mes} ${ano}`;
}