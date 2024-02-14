import photo from '../assets/react.svg'

const Profile = () => {
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        Profile
      </label>
      <div className="flex items-center">
        <img
          className="w-20 h-20 rounded-full mr-4"
          src={photo}
          alt="Karunlal"
        />
        <div className="box-border h-128 w-32 p-4 border-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          feugiat magna nec sapien malesuada, vitae <br />
          convallis lacus pharetra.
        </div>
      </div>
    </p>
  )
}

export default Profile
