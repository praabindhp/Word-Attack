import React, { useState } from 'react';
import {
    Container,
    TextField,
    MenuItem,
    Button,
    Snackbar,
    Alert,
    Typography,
} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AssistantIcon from '@mui/icons-material/Assistant';
import WSLogo from './WS-Light.png';
import CryptoJS from 'crypto-js';

const WordAttack = () => {
    const [input, setInput] = useState('');
    const [group, setGroup] = useState('');
    const [operation, setOperation] = useState('');
    const [output, setOutput] = useState('');
    const [charIndex, setCharIndex] = useState('');
    const [startIndex, setStartIndex] = useState('');
    const [endIndex, setEndIndex] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [replaceValue, setReplaceValue] = useState('');
    const [separator, setSeparator] = useState('');
    const [repeatCount, setRepeatCount] = useState('');
    const [description, setDescription] = useState('');
    const [successAlert, setSuccessAlert] = useState(false);

    const operationDescriptions = {
        '1': 'Converts The Input To Upper Case',
        '2': 'Converts The Input To Lower Case',
        '3': 'Capitalizes The First Letter Of Each Word',
        '4': 'Gets The Character At The Specified Index',
        '5': 'Gets The Substring From The Start Index To The End Index',
        '6': 'Slices The Input From The Start Index To The End Index',
        '7': 'Trims Whitespace From Both Ends Of The Input',
        '8': 'Splits Input By Specified Separator And Joins With Commas',
        '9': 'Replaces Search Value With Replace Value In The Input',
        '10': 'Checks If The Input Includes The Search Value',
        '11': 'Finds The Index Of The Search Value In The Input',
        '12': 'Finds The Last Index Of The Search Value In The Input',
        '13': 'Repeats The Input The Specified Number Of Times',
        '14': 'Checks If The Input Starts With The Search Value',
        '15': 'Checks If The Input Ends With The Search Value',
        '16': 'Reverses The Input You Have Entered',
        '17': 'Counts The Number Of Characters In The Input',
        '18': 'Counts The Number Of Words In The Input',
        '19': 'Removes Vowels From The Input',
        '20': 'Randomizes The Characters In The Input',
        '21': 'Converts The Input To Title Case',
        '22': 'Removes All Digits From The Input',
        '23': 'Replaces Spaces With Hyphens',
        '24': 'Converts The Input To Camel Case',
        '25': 'Converts The Input To Snake Case',
        '26': 'Converts The Input To Kebab Case',
        '27': 'Converts The Input To Pascal Case',
        '28': 'Converts The Input To Dot Case',
        '29': 'Converts The Input To Path Case',
        '30': 'Converts The Input To Constant Case',
        '31': 'Converts The Input To Hexadecimal',
        '32': 'Converts The Input To Binary',
        '33': 'Converts The Input To Base64',
        '34': 'Converts The Input To ROT13',
        '35': 'Converts The Input To MD5 Hash',
        '36': 'Converts The Input To SHA-1 Hash',
        '37': 'Converts The Input To SHA-256 Hash',
        '38': 'Converts The Input To URL Encoded',
        '39': 'Converts The Input To URL Decoded',
        '40': 'Converts The Input To HTML Entities',
        '41': 'Converts The Input From HTML Entities',
        '42': 'Converts The Input To Unicode',
        '43': 'Converts The Input From Unicode',
        '44': 'Converts The Input To Caesar Cipher (Shift By 3)',
        '45': 'Converts The Input To Pig Latin',
    };

    const operationGroups = {
        'Case Conversions': ['1', '2', '3', '21', '24', '25', '26', '27', '28', '29', '30'],
        'Character Operations': ['4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '22', '23'],
        'Encoding/Decoding': ['31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45'],
    };

    const handleGenerate = () => {
        let result = '';
        switch (operation) {
            case '1':
                result = input.toUpperCase();
                break;
            case '2':
                result = input.toLowerCase();
                break;
            case '3':
                result = input.replace(/\b\w/g, char => char.toUpperCase());
                break;
            case '4':
                result = input.charAt(Number(charIndex));
                break;
            case '5':
                result = input.substring(Number(startIndex), Number(endIndex));
                break;
            case '6':
                result = input.slice(Number(startIndex), Number(endIndex));
                break;
            case '7':
                result = input.trim();
                break;
            case '8':
                result = input.split(separator).join(', ');
                break;
            case '9':
                result = input.replace(searchValue, replaceValue);
                break;
            case '10':
                result = input.includes(searchValue).toString();
                break;
            case '11':
                result = input.indexOf(searchValue).toString();
                break;
            case '12':
                result = input.lastIndexOf(searchValue).toString();
                break;
            case '13':
                result = input.repeat(Number(repeatCount));
                break;
            case '14':
                result = input.startsWith(searchValue).toString();
                break;
            case '15':
                result = input.endsWith(searchValue).toString();
                break;
            case '16':
                result = input.split('').reverse().join('');
                break;
            case '17':
                result = input.length.toString();
                break;
            case '18':
                result = input.trim().split(/\s+/).length.toString();
                break;
            case '19':
                result = input.replace(/[aeiouAEIOU]/g, '');
                break;
            case '20':
                result = input.split('').sort(() => Math.random() - 0.5).join('');
                break;
            case '21':
                result = input.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
                break;
            case '22':
                result = input.replace(/\d/g, '');
                break;
            case '23':
                result = input.replace(/\s+/g, '-');
                break;
            case '24':
                result = input.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => index === 0 ? match.toLowerCase() : match.toUpperCase()).replace(/\s+/g, '');
                break;
            case '25':
                result = input.replace(/\s+/g, '_').toLowerCase();
                break;
            case '26':
                result = input.replace(/\s+/g, '-').toLowerCase();
                break;
            case '27':
                result = input.replace(/(\w)(\w*)/g, (_, firstChar, rest) => firstChar.toUpperCase() + rest.toLowerCase()).replace(/\s+/g, '');
                break;
            case '28':
                result = input.replace(/\s+/g, '.').toLowerCase();
                break;
            case '29':
                result = input.replace(/\s+/g, '/').toLowerCase();
                break;
            case '30':
                result = input.replace(/\s+/g, '_').toUpperCase();
                break;
            case '31':
                result = input.split('').map(char => char.charCodeAt(0).toString(16)).join(' ');
                break;
            case '32':
                result = input.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
                break;
            case '33':
                result = btoa(input);
                break;
            case '34':
                result = input.replace(/[a-zA-Z]/g, char => String.fromCharCode((char <= 'Z' ? 90 : 122) >= (char = char.charCodeAt(0) + 13) ? char : char - 26));
                break;
            case '35':
                result = CryptoJS.MD5(input).toString();
                break;
            case '36':
                result = CryptoJS.SHA1(input).toString();
                break;
            case '37':
                result = CryptoJS.SHA256(input).toString();
                break;
            case '38':
                result = encodeURIComponent(input);
                break;
            case '39':
                result = decodeURIComponent(input);
                break;
            case '40':
                result = input.replace(/[\u00A0-\u9999<>&]/gim, char => '&#' + char.charCodeAt(0) + ';');
                break;
            case '41':
                result = input.replace(/&#(\d+);/g, (match, num) => String.fromCharCode(num));
                break;
            case '42':
                result = input.split('').map(char => '\\u' + char.charCodeAt(0).toString(16).padStart(4, '0')).join('');
                break;
            case '43':
                result = input.replace(/\\u[\dA-F]{4}/gi, match => String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16)));
                break;
            case '44':
                result = input.replace(/[a-zA-Z]/g, char => String.fromCharCode(char.charCodeAt(0) + 3));
                break;
            case '45':
                result = input.replace(/\b(\w)(\w*)\b/g, '$2$1ay');
                break;
            default:
                result = input;
        }
        setOutput(result);
        if (!result) {
            setSuccessAlert(false);
            return;
        } else {
            setSuccessAlert(true);
        }
    };

    const handleGroupChange = (e) => {
        const selectedGroup = e.target.value;
        setGroup(selectedGroup);
        setOperation('');
        setDescription('');
    };

    const handleOperationChange = (e) => {
        const selectedOperation = e.target.value;
        setOperation(selectedOperation);
        setDescription(operationDescriptions[selectedOperation] || '');
    };

    const handleCloseAlert = () => {
        setSuccessAlert(false);
    };

    return (
        <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 5, fontFamily: 'Ubuntu, sans-serif' }}>
            <img src={WSLogo} alt="Word Smith" style={{ width: '100%', maxWidth: '300px' }} />
            <Typography variant="h4" component="div" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, fontFamily: 'Ubuntu, sans-serif' }}>
                WORD SMITH
            </Typography>
            <Typography variant="h7" component="div" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: -1, mb: 3, fontFamily: 'Ubuntu, sans-serif' }}>
                By Praabindh's Org
            </Typography>
            <TextField
                label="Enter Your Input Here"
                multiline
                fullWidth
                rows={4}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                sx={{ mb: 2, fontFamily: 'Ubuntu, sans-serif' }}
                InputProps={{ style: { fontFamily: 'Ubuntu, sans-serif' } }}
            />

            <TextField
                select
                label="Select Group"
                fullWidth
                value={group}
                onChange={handleGroupChange}
                sx={{ mb: 2, fontFamily: 'Ubuntu, sans-serif' }}
                SelectProps={{
                    MenuProps: {
                        PaperProps: {
                            style: {
                                textAlign: 'center',
                                fontFamily: 'Ubuntu, sans-serif',
                            },
                        },
                    },
                }}
                InputProps={{ style: { fontFamily: 'Ubuntu, sans-serif' } }}
            >
                <MenuItem value="Case Conversions" sx={{ fontFamily: 'Ubuntu, sans-serif' }}>Case Conversions</MenuItem>
                <MenuItem value="Character Operations" sx={{ fontFamily: 'Ubuntu, sans-serif' }}>Character Operations</MenuItem>
                <MenuItem value="Encoding/Decoding" sx={{ fontFamily: 'Ubuntu, sans-serif' }}>Encoding / Decoding</MenuItem>
            </TextField>

            {group && (
                <TextField
                    select
                    label="Select Operation"
                    fullWidth
                    value={operation}
                    onChange={handleOperationChange}
                    sx={{ mb: 2, fontFamily: 'Ubuntu, sans-serif' }}
                    SelectProps={{
                        MenuProps: {
                            PaperProps: {
                                style: {
                                    textAlign: 'center',
                                    fontFamily: 'Ubuntu, sans-serif',
                                },
                            },
                        },
                    }}
                    InputProps={{ style: { fontFamily: 'Ubuntu, sans-serif' } }}
                >
                    {operationGroups[group].map(op => (
                        <MenuItem key={op} value={op} sx={{ fontFamily: 'Ubuntu, sans-serif' }}>
                            {operationDescriptions[op]}
                        </MenuItem>
                    ))}
                </TextField>
            )}

            {description && (
                <Typography
                    sx={{
                        mb: 2,
                        p: 2,
                        backgroundColor: '#32de84',
                        color: 'black',
                        borderRadius: 1,
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'Ubuntu, sans-serif',
                    }}
                >
                    <AssistantIcon sx={{ mr: 1 }} />
                    {description}
                </Typography>
            )}

            {['4', '5', '6'].includes(operation) && (
                <>
                    {operation === '4' && (
                        <TextField
                            label="Character Index"
                            fullWidth
                            value={charIndex}
                            onChange={(e) => setCharIndex(e.target.value)}
                            sx={{ mb: 2, fontFamily: 'Ubuntu, sans-serif' }}
                            InputProps={{ style: { fontFamily: 'Ubuntu, sans-serif' } }}
                        />
                    )}
                    {['5', '6'].includes(operation) && (
                        <>
                            <TextField
                                label="Start Index"
                                fullWidth
                                value={startIndex}
                                onChange={(e) => setStartIndex(e.target.value)}
                                sx={{ mb: 2, fontFamily: 'Ubuntu, sans-serif' }}
                                InputProps={{ style: { fontFamily: 'Ubuntu, sans-serif' } }}
                            />
                            <TextField
                                label="End Index"
                                fullWidth
                                value={endIndex}
                                onChange={(e) => setEndIndex(e.target.value)}
                                sx={{ mb: 2, fontFamily: 'Ubuntu, sans-serif' }}
                                InputProps={{ style: { fontFamily: 'Ubuntu, sans-serif' } }}
                            />
                        </>
                    )}
                </>
            )}

            {['9', '10', '11', '12', '14', '15'].includes(operation) && (
                <TextField
                    label="Search Value"
                    fullWidth
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    sx={{ mb: 2, fontFamily: 'Ubuntu, sans-serif' }}
                    InputProps={{ style: { fontFamily: 'Ubuntu, sans-serif' } }}
                />
            )}

            {['9'].includes(operation) && (
                <TextField
                    label="Replace Value"
                    fullWidth
                    value={replaceValue}
                    onChange={(e) => setReplaceValue(e.target.value)}
                    sx={{ mb: 2, fontFamily: 'Ubuntu, sans-serif' }}
                    InputProps={{ style: { fontFamily: 'Ubuntu, sans-serif' } }}
                />
            )}

            {['8'].includes(operation) && (
                <TextField
                    label="Separator"
                    fullWidth
                    value={separator}
                    onChange={(e) => setSeparator(e.target.value)}
                    sx={{ mb: 2, fontFamily: 'Ubuntu, sans-serif' }}
                    InputProps={{ style: { fontFamily: 'Ubuntu, sans-serif' } }}
                />
            )}

            {['13'].includes(operation) && (
                <TextField
                    label="Repeat Count"
                    fullWidth
                    value={repeatCount}
                    onChange={(e) => setRepeatCount(e.target.value)}
                    sx={{ mb: 2, fontFamily: 'Ubuntu, sans-serif' }}
                    InputProps={{ style: { fontFamily: 'Ubuntu, sans-serif' } }}
                />
            )}

            <Button
                variant="contained"
                onClick={handleGenerate}
                sx={{ mt: 0, mb: 2, fontFamily: 'Ubuntu, sans-serif', backgroundColor: '#154360' }}
                startIcon={<AutoAwesomeIcon />}
            >
                Generate
            </Button>

            <TextField
                label="Output"
                multiline
                fullWidth
                rows={4}
                value={output}
                onChange={(e) => setOutput(e.target.value)}
                sx={{ mb: 2, fontFamily: 'Ubuntu, sans-serif' }}
                InputProps={{ style: { fontFamily: 'Ubuntu, sans-serif' } }}
            />

            <Snackbar
                open={successAlert}
                autoHideDuration={3000}
                onClose={handleCloseAlert}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%', fontFamily: 'Ubuntu, sans-serif' }}>
                    Operation Performed Successfully
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default WordAttack;