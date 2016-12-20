import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fromStatus, fromUser, fromInitiative, fromEntities } from 'store/selectors'
import {
  initiativePhotoPreview,
  initiativePhotoUpdate,
  INITIATIVE_PHOTO_UPDATE,
  INITIATIVE_PHOTO_PREVIEW
} from 'store/actions'

import { InitiativeDetailCover } from 'components'

class InitiativeDetailCoverContainer extends Component {
  static propTypes = {
    initiative: PropTypes.shape({
      id: PropTypes.any
    }).isRequired
  }

  render () {
    return <InitiativeDetailCover {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  user: fromEntities.getUser(state, fromUser.getCurrentId(state)),
  uploadLoading: fromStatus.isLoading(state, INITIATIVE_PHOTO_UPDATE),
  uploadProgress: fromInitiative.getPhotoUpdateProgress(state),
  preview: fromInitiative.getPhotoPreviewUrl(state),
  previewLoading: fromStatus.isLoading(state, INITIATIVE_PHOTO_PREVIEW)
})

const mapDispatchToProps = (dispatch, { initiative }) => ({
  onSelect: (file) => dispatch(initiativePhotoPreview.request(file)),
  onUpload: (file) => dispatch(initiativePhotoUpdate.request(initiative.id, file)),
  onCancel: () => dispatch(initiativePhotoPreview.cancel())
})

export default connect(mapStateToProps, mapDispatchToProps)(InitiativeDetailCoverContainer)