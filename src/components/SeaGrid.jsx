import { useContext } from 'react'
import GreatSeaChart from '../assets/images/Great_Sea_Chart.jpg'
import BlueChuIcon from '../assets/images/items/blue_chu_jelly.png'
import OldManHoHoIcon from '../assets/images/items/old_man_ho_ho.png'
import { islands } from '../data/constants.js'
import { SettingsContext } from '../context/SettingsContext.jsx'

function SeaGrid() {
  const { settings } = useContext(SettingsContext)

  const handleIconClick = (island, type) => {
    const label =
      type === 'blue_chu'
        ? 'Blue Chu 1'
        : type === 'blue_chu_2'
        ? 'Blue Chu 2'
        : 'Old Man Ho Ho'

    alert(`${island.name}: ${label} clicked`)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', padding: 16 }}>
      <div style={{ position: 'relative', width: 'min(90%, 900px)', maxWidth: '600px', aspectRatio: '1 / 1' }}>
        <img
          src={GreatSeaChart}
          alt="Great Sea Chart"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
            gridTemplateRows: 'repeat(7, minmax(0, 1fr))',
            gap: 2,
          }}
        >
          {islands.map((island, index) => (
            <div
              key={`${island.name}-${index}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 6px',
                color: 'white',
                fontSize: '0.75rem',
                lineHeight: 1.2,
                textAlign: 'center',
              }}
            >
              <p style={{ margin: 0, textShadow: '0 0 4px rgba(0,0,0,0.8)' }}>
                {island.name}
              </p>

              {(island.blue_chu || island.old_man_ho_ho) && (
                <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', justifyContent: 'center', marginTop: 6 }}>

                  {island.blue_chu && settings.showBlueChu && (
                    <>
                      {Array.from({ length: island.has_two_blue_chu ? 2 : 1 }).map((_, chuIndex) => (
                        <button
                          key={`blue-chu-${chuIndex}`}
                          type="button"
                          onClick={(event) => {
                            const iconType = chuIndex === 0 ? 'blue_chu' : 'blue_chu_2'
                            console.log(`Clicked ${iconType} on ${island.name}`)
                            handleIconClick(island, iconType)
                          }}
                          title="Blue Chu"
                          style={{
                            border: 'none',
                            background: 'transparent',
                            padding: '1px',
                            cursor: 'pointer',
                          }}
                        >
                          <img
                            src={BlueChuIcon}
                            alt="Blue Chu"
                            style={{ width: 20, height: 20, display: 'block' }}
                          />
                        </button>
                      ))}
                    </>
                  )}

                  {island.old_man_ho_ho && (
                    <button
                      hidden={!settings.showOldManHoHo}
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation()
                        handleIconClick(island, 'old_man_ho_ho')
                      }}
                      title="Old Man Ho Ho"
                      style={{
                        border: 'none',
                        background: 'transparent',
                        padding: '1px',
                        cursor: 'pointer',
                      }}
                    >
                      <img
                        src={OldManHoHoIcon}
                        alt="Old Man Ho Ho"
                        style={{ width: 20, height: 20, display: 'block' }}
                      />
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SeaGrid
