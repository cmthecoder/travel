import team1 from '../../assets/images/team/team1.jpg'
import team2 from '../../assets/images/team/team2.jpg'
import team3 from '../../assets/images/team/team3.jpg'

const Team = () => {
  const teams = [team1, team2, team3]

  return (
    <section className='lg:h-[650px] py-6 lg:py-0 2xl:h-[800px] bg-teamBg bg-cover bg-no-repeat lg:mt-[5rem]'>
      <div className='w-[90%] lg:w-[85%] mx-auto grid grid-cols-team gap-5'>
        {teams.map((team, i) => (
          <div key={i} className='lg:mt-[-7rem] !z-30 w-full'>
            <img src={team} alt="teamImg" className='w-full h-[23rem] 2xl:h-[30rem] object-cover' />
          </div>
        ))}
      </div>
      <div className='w-[90%] lg:w-[60%] mx-auto bg-blue-950/60 text-white mt-[3rem] p-4 text-center flex flex-col gap-5 rounded-lg'>
        <h1 className='text-2xl lg:text-5xl capitalize'>Our Leaders</h1>
        <p className='2xl:text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, cupiditate obcaecati? Officiis ducimus reiciendis minima nostrum doloribus est veniam fugit quo dolores repudiandae? Labore quia consectetur error nobis assumenda est!
        Dolore suscipit incidunt aliquam doloremque accusamus, excepturi repudiandae expedita eos quasi eius. Iste animi, possimus quas nisi maxime ab esse earum vel, quae cupiditate nostrum necessitatibus eveniet, a quia <quisquam className=""></quisquam>5</p>
        <p className='text-sm 2xl:text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad blanditiis unde ex autem ipsum sapiente corporis. Impedit, quam. Voluptas nulla architecto ut omnis sequi. Tempore, voluptates. Maxime quod voluptas assumenda.
        Explicabo ut atque hic excepturi, beatae enim sapiente eum, quisquam ducimus quidem magni ea eaque nisi exercitationem a ad vitae voluptatem nam laboriosam aspernatur labore? Quod accusantium praesentium mollitia laudantium?0</p>
      </div>
    </section>
  )
}

export default Team