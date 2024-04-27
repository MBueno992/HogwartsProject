import Card from '../Card';
import Register from '../Form/Register';
import GetAvatar from '../Reusable/GetAvatar';
import '../../scss/layout/AdminData.scss';

function AdminData({
  dataUser,
  alertMsg,
  registerWizard,
  formatDate,
  houseSelect,
  userRegister,
  isLoggedIn,
  updateUserData,
}) {
  return (
    <section className="adminForm">
      <Card
        dataUser={dataUser}
        // imageHouse={imageHouse}
        formatDate={formatDate}
        houseSelect={houseSelect}
      />
      <GetAvatar updateAvatar={userRegister} id="image" />
      <Register
        dataUser={dataUser}
        alertMsg={alertMsg}
        registerWizard={registerWizard}
        userRegister={userRegister}
        isLoggedIn={isLoggedIn}
        updateUserData={updateUserData}
      />
    </section>
  );
}

export default AdminData;
