import React from 'react'
import Button from './Button'

const ContentList = ({
  animeList,
  loading,
  error,
  page,
  handleNextPage,
  handlePrevPage,
  hiddenAnime,
  handleHideClick
}) => {
  const filteredAnimeList = animeList.filter(
    anime => !hiddenAnime.has(anime.mal_id)
  )

  return (
    <>
      <div className='card bg-slate-100/5 mt-3  center-container w-96 shadow-sm'>
        {filteredAnimeList.length === 0 ? (
          <div className='p-5'>
            <p> This anime is hidden</p>
            <div className='card-actions flex justify-between'>
              <Button
                onClick={handlePrevPage}
                className={'w-fit'}
                text={'⬅️ Back'}
              />
              <Button
                onClick={handleNextPage}
                className={'w-fit'}
                text={'Next ➡️'}
              />
            </div>
          </div>
        ) : (
          filteredAnimeList.map(anime => (
            <>
              <div key={anime.mal_id}>
                <figure className='aspect-[16/9]'>
                  <iframe
                    className='w-full h-full'
                    width='1044'
                    height='582'
                    src={anime.trailer.embed_url}
                    title={`${anime.title} Trailer`}
                    frameborder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerpolicy='strict-origin-when-cross-origin'
                    allowfullscreen
                  ></iframe>
                </figure>
                <div className='card-body text-left'>
                  <h2 className='card-title font-bold cursor-pointer'>
                    {anime.title}
                  </h2>
                  <p className='text-lg font-thin'>
                    {anime.aired?.from
                      ? new Date(anime.aired.from).getFullYear()
                      : 'N/A'}
                    &nbsp; · &nbsp; {anime.episodes ?? 'N/A'} ep &nbsp; · ⭐
                    {anime.score} &nbsp;· 🏆top {anime.popularity}
                  </p>
                  <div className='flex space-x-2'>
                    {anime.genres?.map((genre, index) => (
                      <div
                        key={index}
                        className='badge badge-dash badge-accent'
                      >
                        {genre.name}
                      </div>
                    )) || (
                      <div className='badge badge-dash badge-accent'>N/A</div>
                    )}
                  </div>
                  <p className='mt-3 font-thin'>
                    {anime.synopsis.split('.')[0] + '.'}
                  </p>

                  <div className='card-actions flex justify-between'>
                    <Button
                      onClick={handlePrevPage}
                      className={'w-fit'}
                      text={'⬅️ Back'}
                    />
                    <Button
                      onClick={() => handleHideClick(anime.mal_id)}
                      className={'w-fit'}
                      text={'🙈 Hide'}
                    />
                    <Button
                      onClick={handleNextPage}
                      className={'w-fit'}
                      text={'Next ➡️'}
                    />
                  </div>
                </div>
              </div>
            </>
          ))
        )}
      </div>
    </>
  )
}

export default ContentList
