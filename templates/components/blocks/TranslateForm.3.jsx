import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Stack, Paper, Button } from '@mui/material';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { DispatchContext } from '../providers/DispatchContext';
import { getTranslate } from '../providers/TranslateAPI';
import { countries } from './Countries';

export const TranslateForm = ({ prices }) => {
  const dispatch = useContext(DispatchContext);
  const [fromText, setFromText] = useState('りんご');
  const [toText, setToText] = useState('');
  const [lang, setLang] = useState({
    fromLang: 'ja-JP',
    toLang: 'en-US',
  });

  const handleOnChangeWord = (e) => {
    setFromText(() => e.target.value);
  };

  const handleOnChangeLang = (e) => {
    setLang((lang) => ({
      ...lang,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Container maxWidth="sm" sx={{ my: 5 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Box sx={{ width: 200 }}>
          <TextField
            variant="outlined"
            rows={6}
            multiline
            id="from-text"
            label="翻訳前の言葉"
            sx={{ backgroundColor: '#ffffff' }}
            value={fromText}
            onChange={handleOnChangeWord}
          />
          <FormControl sx={{ my: 2 }} fullWidth size="small">
            <InputLabel id="from-text-input-label">翻訳前の言語</InputLabel>
            <Select
              labelId="from-text-input-label"
              label="翻訳前の言語"
              id="fromLang"
              name="fromLang"
              sx={{ backgroundColor: '#ffffff' }}
              value={lang.fromLang}
              onChange={handleOnChangeLang}
            >
              {Object.keys(countries).map((key) => {
                return (
                  <MenuItem key={key} value={key}>
                    {countries[key]}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
        <Button variant="contained" color="secondary">
          翻訳
          <ArrowForwardIosIcon fontSize="small" />
        </Button>
        <Box sx={{ width: 200 }}>
          <TextField
            id="to-text"
            label="翻訳後の言葉"
            multiline
            rows={6}
            variant="outlined"
            sx={{ backgroundColor: '#ffffff' }}
            value={toText}
          />
          <FormControl sx={{ my: 2 }} fullWidth size="small">
            <InputLabel id="to-text-input-label">翻訳後の言語</InputLabel>
            <Select
              labelId="to-text-input-label"
              label="翻訳後の言語"
              id="toLang"
              name="toLang"
              sx={{ backgroundColor: '#ffffff' }}
              value={lang.toLang}
              onChange={handleOnChangeLang}
            >
              {Object.keys(countries).map((key) => {
                return (
                  <MenuItem key={key} value={key}>
                    {countries[key]}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      </Stack>
    </Container>
  );
};
