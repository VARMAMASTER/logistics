// src/ProfilePage.js

import React from "react";
import {
  Container,
  Paper,
  Avatar,
  Typography,
  Box,
  IconButton,
  Link,
} from "@mui/material";
import { Twitter, LinkedIn, GitHub, Language } from "@mui/icons-material";
// src/user.js

const user = {
  name: "John Doe",
  avatar: "https://via.placeholder.com/150",
  email: "john.doe@example.com",
  bio: "Full Stack Developer. Passionate about coding and coffee.",
  location: "San Francisco, CA",
  website: "https://johndoe.dev",
  social: {
    twitter: "@johndoe",
    linkedin: "/in/johndoe",
    github: "johndoe",
  },
};

const ProfilePage = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 3,
          backgroundColor: "#ffffff",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar
            alt={user.name}
            src={user.avatar}
            sx={{
              width: 120,
              height: 120,
              mb: 2,
              border: "4px solid #0052CC",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          />
          <Typography variant="h4" component="h1" gutterBottom>
            {user.name}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {user.bio}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Link href={`mailto:${user.email}`} color="inherit">
              {user.email}
            </Link>
          </Typography>
          <Box mt={3}>
            <IconButton
              aria-label="website"
              component="a"
              href={user.website}
              target="_blank"
              sx={{
                color: "#0052CC",
                "&:hover": {
                  color: "#172B4D",
                },
              }}
            >
              <Language />
            </IconButton>
            <IconButton
              aria-label="twitter"
              component="a"
              href={`https://twitter.com/${user.social.twitter}`}
              target="_blank"
              sx={{
                color: "#0052CC",
                "&:hover": {
                  color: "#172B4D",
                },
              }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              aria-label="linkedin"
              component="a"
              href={`https://linkedin.com${user.social.linkedin}`}
              target="_blank"
              sx={{
                color: "#0052CC",
                "&:hover": {
                  color: "#172B4D",
                },
              }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              aria-label="github"
              component="a"
              href={`https://github.com/${user.social.github}`}
              target="_blank"
              sx={{
                color: "#0052CC",
                "&:hover": {
                  color: "#172B4D",
                },
              }}
            >
              <GitHub />
            </IconButton>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default ProfilePage;
