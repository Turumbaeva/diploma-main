import img from "./../assets/thank-you.png"

export default function ThankYou() {
  setTimeout(() => {
    window.location.href = "/";
  }, 2000);
  return (
    <div className="ThankYou">
      <img src={img} alt="thank-you" />
      <h1>Thank you!</h1>
      <p>Your order has been received. Our specialists will contact with you shortly to confirm it.</p>
    </div>
  );
}