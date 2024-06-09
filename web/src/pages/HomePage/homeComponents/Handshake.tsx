import { Box } from '@mui/material'

export const Handshake = () => {
  return (
    <Box position={'absolute'} right={'15%'}>
      <div id="body" className="grey lighten-2 valign-wrapper">
        <div id="opty_hands" className="valign">
          <div id="left-arm">
            <div className="left-hand">
              <span>{'...'}</span>
            </div>
            <div className="left-shake">
              <span>
                _
                <br />
                _
                <br />_
              </span>
            </div>
          </div>
          <div id="right-arm">
            <div className="right-hand">
              <span>...</span>
            </div>
            <div className="right-shake"></div>
          </div>
        </div>
      </div>
    </Box>
  )
}
