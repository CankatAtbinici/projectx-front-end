import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

function UserContactInformation(props) {
  const {formEventHandler,
         registerExperiencedForm,
         registerSteps
    } = props;
  return (
    <div className="user-contact-information-container my-3 box-shadow"
     hidden = {registerSteps === 0 ? false : true}
    >
      <section className="user-contact-experienced-form-area ">
        <div className="user-contact-experienced-form-header-container py-2">
          <span className="user-contact-experienced-form-header-content">
            {"Kullanıcı Bilgileri".toLocaleUpperCase()}
          </span>
        </div>

        <div className="user-contact-information-body">
          <Form>
            <FormGroup>
              <Label for="id-number">TC Kimlik Numarası</Label>
              <Input type="text" name="tc_id_number" id="id-number" required 
              onChange={(e) =>formEventHandler(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="experienced-phone-number">
                Size Ulaşabileceğimiz Telefon Numarası{" "}
              </Label>
              <Input
                type="text"
                name="experienced_phone_number"
                id="experienced-phone-number"
                onChange={(e) =>formEventHandler(e)}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="address-info">Açık Adres Bilgisi </Label>
              <Input
                type="textarea"
                name="address_info"
                id="address-info"
                onChange={(e) =>formEventHandler(e)}
                required
              />
            </FormGroup>
          </Form>
        </div>
      </section>


      <section className="user-contact-experienced-form-area ">
        <div className="user-contact-experienced-form-header-container py-2">
          <span className="user-contact-experienced-form-header-content">
            {"Eğitim Bilgileri".toLocaleUpperCase()}
          </span>
        </div>

        <div className="user-contact-information-body">
          <Form>
            <FormGroup>
              <Label for="graduated-info">Mezuniyet Bilgisi</Label>
              <Input type="select" name="graduated_info" id="graduated-info" 
               onChange={(e) =>formEventHandler(e)}
              required>
                        <option value={1}>İlk Okul</option>
                        <option value={2}>Orta Okul</option>
                        <option value={3}>Lise</option>
                        <option value={4}>Üniversite</option>
                        <option value={5}>Yüksek Lisans</option>
                        <option value={6}>Doktora ve Üzeri Akademik Kariyer</option>
                        <option value={7}>Üniversite ve Üzeri Düzeyde Öğrenci</option>
                </Input>
            </FormGroup>
            <FormGroup>
              <Label for="experienced-phone-number">
              </Label>
              <Input
                type="select"
                name="universty"
                id="universty"
                onChange={(e) =>formEventHandler(e)}
                required
              >
                        <option value={1}>Ege Üniveristesi</option>
                        <option value={2}>Akdeniz Üniversitesi</option>
                        <option value={3}>Pamuukkale Üniversitesi</option>
                        </Input>
            </FormGroup>
            <FormGroup>
              <Label for="universty-department">Bölüm Bilgisi</Label>
              <Input type="select" name="universty_department" id="universty-department"
               onChange={(e) =>formEventHandler(e)}
              required>
                        <option value={1}>Radyo Televizyon ve Sinema</option>
                        <option value={2}>Turizm</option>
                        <option value={3}>Bilgisayar Mühendisliği</option>
                        <option value={4}>Görsel Sanatlar</option>
                        <option value={5}>Opera ve Bale</option>
                        <option value={6}>Müzik Öğretmenliği</option>
                </Input>
            </FormGroup>

            <FormGroup>
              <Label for="address-info">Mezun iseniz mezuniyet belgesi </Label>
              <Input
                type="file"
                name="address_info"
                id="address-info"
                onChange={(e) =>formEventHandler(e)}
                required
              />
            </FormGroup>
          </Form>
        </div>
      </section>


      <section className="user-contact-experienced-form-area ">
        <div className="user-contact-experienced-form-header-container py-2">
          <span className="user-contact-experienced-form-header-content">
            {"Deneyim paylaşacağınız alan bilgileri".toLocaleUpperCase()}
          </span>
        </div>

        <div className="user-contact-information-body">
          <Form>
            <FormGroup>
              <Label for="experience-parent">Deneyim alanı</Label>
              <Input type="select" name="experience_parent" id="experience-parent" 
               onChange={(e) =>formEventHandler(e)}
              required>
                        <option value={1}>Hobi</option>
                        <option value={2}>Eğitim</option>
                        <option value={3}>Bölge</option>
                </Input>
            </FormGroup>
            <FormGroup>
              <Label for="experience-child">Deneyim detayı</Label>
              <Input type="select" name="experience_child" id="experience-child" 
               onChange={(e) =>formEventHandler(e)}
              required>
                        <option value={1}>balıkçılık</option>
                        <option value={2}>Bahçeciik</option>
                        <option value={3}>Origami</option>
                        <option value={3}>Rubik küp</option>
                        <option value={3}>Bilgisayar Oyunları</option>
                </Input>
            </FormGroup>

            <FormGroup>
              <Label for="exp-description">
            Deneyimli olduğunuz alan hakkında kendinizi tanıtır  mısınız ?     
              </Label>
                    <Input type="textarea" id="exp-description"
                    name="exp_description"
                     onChange={(e) =>formEventHandler(e)}
                    />
            </FormGroup>    

            <FormGroup>
              <Label for="exp-file">Bu deneyiminiz hakkında var ise sertifika veya mezuniyet belgesi</Label>
              <Input
                type="file"
                name="exp_file"
                id="exp-file"
                required
              />
            </FormGroup>
          </Form>
        </div>
      </section>
      <section className="register-experienced-form-submit-container">
      <div className="register-experienced-submit-area">
        <Button className="register-experienced-submit-button btn-pink"
        onClick={registerExperiencedForm}
        >
         Sonraki Adım
        </Button>
      </div>
      </section>
    </div>
  );
}

export default UserContactInformation;
