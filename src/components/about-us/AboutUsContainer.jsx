import React from "react";
import "./aboutUs.css";

function AboutUsContainer(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <section className="about-us-container">
        <h1 className="about-us-title">[Projectx] Hakkında </h1>
        <div className="about-us-pharagraph">
          Merhaba! Platformumuz, insanların deneyimlerini paylaştıkları ve
          tavsiyeler aldıkları bir sitedir. Kullanıcılar profil oluşturarak
          kendi deneyimlerini satabilir ve diğer kullanıcılardan tavsiyeler
          alarak daha bilinçli kararlar verme şansına sahip olurlar. [Projectx]'de
          seyahat, evcil hayvan bakımı, egzersiz ve sağlıklı yaşam gibi birbirinde farklı bir çok
          alanda deneyimli kullanıcılarımız tavsiyeler
          vererek para kazanabilirler. Aynı zamanda platformumuz üzerinden
          herhangi bir konuda deneyimli olan bir kullanıcıdan tavsiye almak
          isteyen diğer kullanıcılarımız da randevu alarak görüşme yapabilirler.
          Böylece hem deneyim paylaşımı yapılır hem de tavsiyeler alınarak doğru
          kararlar verilebilir. Platformumuz, kolay kullanımı ve güvenilir
          içeriğiyle hizmet vermeyi amaçlamaktadır.
        </div>
        <div className="about-us-pharagraph">
          Günümüzde, ironik de olsa bilginin ya da deneyimin değerini
          yitirdiğini düşünüyoruz ve bu durumdan rahatsızlık duyuyoruz. Bu
          platformda, her bilgi değerlidir ve önemsiz gibi görünen tecrübeler
          bile birer yaşanmışlık ve tecrübedir. Elbette, bu tecrübelerin
          ekonomik bir değere dönüşmesi de normal bir durumdur. Biz, insanların
          birbirlerine yardımcı olmalarını ve bilgi paylaşımı yapmalarını
          destekliyoruz. [sitenin ismi] ile birlikte, tüm bilgilerin değerini
          yeniden keşfedin...
        </div>
      </section>
    </div>
  );
}

export default AboutUsContainer;
