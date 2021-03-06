import * as React from 'react'
import { Box, Inline } from '~/components/chungking-core'

const ProjectTags: React.FC = ({ children }) => {
  return (
    <Box mt="md">
      <Inline spacing="xs">{children}</Inline>
    </Box>
  )
}

export default ProjectTags
