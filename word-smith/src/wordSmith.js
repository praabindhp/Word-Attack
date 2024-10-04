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

const WordSmith = () => {
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
        'To Upper Case': 'Converts The Input To Upper Case',
        'To Lower Case': 'Converts The Input To Lower Case',
        'Capitalize First Letter': 'Capitalizes The First Letter Of Each Word',
        'Character At Index': 'Gets The Character At The Specified Index',
        'Substring ( Start, End )': 'Gets The Substring From The Start Index To The End Index',
        'Slice ( Start, End )': 'Slices The Input From The Start Index To The End Index',
        'Trim': 'Trims Whitespace From Both Ends Of The Input',
        'Split ( Separator )': 'Splits Input By Specified Separator And Joins With Commas',
        'Replace ( Search Value, New Value )': 'Replaces Search Value With Replace Value In The Input',
        'Includes Search String': 'Checks If The Input Includes The Search Value',
        'Index Of ( Search Value )': 'Finds The Index Of The Search Value In The Input',
        'Last Index Of ( Search Value )': 'Finds The Last Index Of The Search Value In The Input',
        'Repeat ( Count )': 'Repeats The Input The Specified Number Of Times',
        'Starts With ( Search String )': 'Checks If The Input Starts With The Search Value',
        'Ends With ( Search String )': 'Checks If The Input Ends With The Search Value',
        'Reverse String': 'Reverses The Input You Have Entered',
        'Count Characters': 'Counts The Number Of Characters In The Input',
        'Count Words': 'Counts The Number Of Words In The Input',
        'Remove Vowels': 'Removes Vowels From The Input',
        'Randomize Characters': 'Randomizes The Characters In The Input',
        'To Title Case': 'Converts The Input To Title Case',
        'Remove Digits': 'Removes All Digits From The Input',
        'Replace Spaces With Hyphens': 'Replaces Spaces With Hyphens',
        'To Camel Case': 'Converts The Input To Camel Case',
        'To Snake Case': 'Converts The Input To Snake Case',
        'To Kebab Case': 'Converts The Input To Kebab Case',
        'To Pascal Case': 'Converts The Input To Pascal Case',
        'To Dot Case': 'Converts The Input To Dot Case',
        'To Path Case': 'Converts The Input To Path Case',
        'To Constant Case': 'Converts The Input To Constant Case',
        'To Hexadecimal': 'Converts The Input To Hexadecimal',
        'To Binary': 'Converts The Input To Binary',
        'To Base64': 'Converts The Input To Base64',
        'To ROT13': 'Converts The Input To ROT13',
        'To MD5 Hash': 'Converts The Input To MD5 Hash',
        'To SHA-1 Hash': 'Converts The Input To SHA-1 Hash',
        'To SHA-256 Hash': 'Converts The Input To SHA-256 Hash',
        'To URL Encoded': 'Converts The Input To URL Encoded',
        'To URL Decoded': 'Converts The Input To URL Decoded',
        'To HTML Entities': 'Converts The Input To HTML Entities',
        'From HTML Entities': 'Converts The Input From HTML Entities',
        'To Unicode': 'Converts The Input To Unicode',
        'From Unicode': 'Converts The Input From Unicode',
        'To Caesar Cipher (Shift By 3)': 'Converts The Input To Caesar Cipher (Shift By 3)',
        'To Pig Latin': 'Converts The Input To Pig Latin',
    };

    const operationGroups = {
        'Case Conversions': ['Capitalize First Letter', 'To Upper Case', 'To Lower Case', 'To Title Case', 'To Camel Case', 'To Snake Case', 'To Kebab Case', 'To Pascal Case', 'To Dot Case', 'To Path Case', 'To Constant Case'],
        'Character Operations': ['Character At Index', 'Substring ( Start, End )', 'Slice ( Start, End )', 'Trim', 'Split ( Separator )', 'Replace ( Search Value, New Value )', 'Includes Search String', 'Index Of ( Search Value )', 'Last Index Of ( Search Value )', 'Repeat ( Count )', 'Starts With ( Search String )', 'Ends With ( Search String )', 'Reverse String', 'Count Characters', 'Count Words', 'Remove Vowels', 'Randomize Characters', 'Remove Digits', 'Replace Spaces With Hyphens'],
        'Encoding/Decoding': ['To Hexadecimal', 'To Binary', 'To Base64', 'To ROT13', 'To MD5 Hash', 'To SHA-1 Hash', 'To SHA-256 Hash', 'To URL Encoded', 'To URL Decoded', 'To HTML Entities', 'From HTML Entities', 'To Unicode', 'From Unicode', 'To Caesar Cipher (Shift By 3)', 'To Pig Latin'],
    };

    const handleGenerate = () => {
        let result = '';
        switch (operation) {
            case 'To Upper Case':
                result = input.toUpperCase();
                break;
            case 'To Lower Case':
                result = input.toLowerCase();
                break;
            case 'Capitalize First Letter':
                result = input.replace(/\b\w/g, char => char.toUpperCase());
                break;
            case 'Character At Index':
                result = input.charAt(Number(charIndex));
                break;
            case 'Substring ( Start, End )':
                result = input.substring(Number(startIndex), Number(endIndex));
                break;
            case 'Slice ( Start, End )':
                result = input.slice(Number(startIndex), Number(endIndex));
                break;
            case 'Trim':
                result = input.trim();
                break;
            case 'Split ( Separator )':
                result = input.split(separator).join(', ');
                break;
            case 'Replace ( Search Value, New Value )':
                result = input.replace(searchValue, replaceValue);
                break;
            case 'Includes Search String':
                result = input.includes(searchValue).toString();
                break;
            case 'Index Of ( Search Value )':
                result = input.indexOf(searchValue).toString();
                break;
            case 'Last Index Of ( Search Value )':
                result = input.lastIndexOf(searchValue).toString();
                break;
            case 'Repeat ( Count )':
                result = input.repeat(Number(repeatCount));
                break;
            case 'Starts With ( Search String )':
                result = input.startsWith(searchValue).toString();
                break;
            case 'Ends With ( Search String )':
                result = input.endsWith(searchValue).toString();
                break;
            case 'Reverse String':
                result = input.split('').reverse().join('');
                break;
            case 'Count Characters':
                result = input.length.toString();
                break;
            case 'Count Words':
                result = input.trim().split(/\s+/).length.toString();
                break;
            case 'Remove Vowels':
                result = input.replace(/[aeiouAEIOU]/g, '');
                break;
            case 'Randomize Characters':
                result = input.split('').sort(() => Math.random() - 0.5).join('');
                break;
            case 'To Title Case':
                result = input.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
                break;
            case 'Remove Digits':
                result = input.replace(/\d/g, '');
                break;
            case 'Replace Spaces With Hyphens':
                result = input.replace(/\s+/g, '-');
                break;
            case 'To Camel Case':
                result = input.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => index === 0 ? match.toLowerCase() : match.toUpperCase()).replace(/\s+/g, '');
                break;
            case 'To Snake Case':
                result = input.replace(/\s+/g, '_').toLowerCase();
                break;
            case 'To Kebab Case':
                result = input.replace(/\s+/g, '-').toLowerCase();
                break;
            case 'To Pascal Case':
                result = input.replace(/(\w)(\w*)/g, (_, firstChar, rest) => firstChar.toUpperCase() + rest.toLowerCase()).replace(/\s+/g, '');
                break;
            case 'To Dot Case':
                result = input.replace(/\s+/g, '.').toLowerCase();
                break;
            case 'To Path Case':
                result = input.replace(/\s+/g, '/').toLowerCase();
                break;
            case 'To Constant Case':
                result = input.replace(/\s+/g, '_').toUpperCase();
                break;
            case 'To Hexadecimal':
                result = input.split('').map(char => char.charCodeAt(0).toString(16)).join(' ');
                break;
            case 'To Binary':
                result = input.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
                break;
            case 'To Base64':
                result = btoa(input);
                break;
            case 'To ROT13':
                result = input.replace(/[a-zA-Z]/g, char => String.fromCharCode((char <= 'Z' ? 90 : 122) >= (char = char.charCodeAt(0) + 13) ? char : char - 26));
                break;
            case 'To MD5 Hash':
                result = CryptoJS.MD5(input).toString();
                break;
            case 'To SHA-1 Hash':
                result = CryptoJS.SHA1(input).toString();
                break;
            case 'To SHA-256 Hash':
                result = CryptoJS.SHA256(input).toString();
                break;
            case 'To URL Encoded':
                result = encodeURIComponent(input);
                break;
            case 'To URL Decoded':
                result = decodeURIComponent(input);
                break;
            case 'To HTML Entities':
                result = input.replace(/[\u00A0-\u9999<>&]/gim, char => '&#' + char.charCodeAt(0) + ';');
                break;
            case 'From HTML Entities':
                result = input.replace(/&#(\d+);/g, (match, num) => String.fromCharCode(num));
                break;
            case 'To Unicode':
                result = input.split('').map(char => '\\u' + char.charCodeAt(0).toString(16).padStart(4, '0')).join('');
                break;
            case 'From Unicode':
                result = input.replace(/\\u[\dA-F]{4}/gi, match => String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16)));
                break;
            case 'To Caesar Cipher (Shift By 3)':
                result = input.replace(/[a-zA-Z]/g, char => String.fromCharCode(char.charCodeAt(0) + 3));
                break;
            case 'To Pig Latin':
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
                <a href="https://github.com/praabindhp" target="_blank" rel="noopener noreferrer" style={{ color: '#154360', textDecoration: 'none' }}>By Praabindh's Org</a>
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
                label="Select Type"
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
                            {op}
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

            {['Character At Index', 'Substring ( Start, End )', 'Slice ( Start, End )'].includes(operation) && (
                <>
                    {operation === 'Character At Index' && (
                        <TextField
                            label="Character Index"
                            fullWidth
                            value={charIndex}
                            onChange={(e) => setCharIndex(e.target.value)}
                            sx={{ mb: 2, fontFamily: 'Ubuntu, sans-serif' }}
                            InputProps={{ style: { fontFamily: 'Ubuntu, sans-serif' } }}
                        />
                    )}
                    {['Substring ( Start, End )', 'Slice ( Start, End )'].includes(operation) && (
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

            {['Replace ( Search Value, New Value )', 'Includes Search String', 'Index Of ( Search Value )', 'Last Index Of ( Search Value )', 'Starts With ( Search String )', 'Ends With ( Search String )'].includes(operation) && (
                <TextField
                    label="Search Value"
                    fullWidth
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    sx={{ mb: 2, fontFamily: 'Ubuntu, sans-serif' }}
                    InputProps={{ style: { fontFamily: 'Ubuntu, sans-serif' } }}
                />
            )}

            {['Replace ( Search Value, New Value )'].includes(operation) && (
                <TextField
                    label="Replace Value"
                    fullWidth
                    value={replaceValue}
                    onChange={(e) => setReplaceValue(e.target.value)}
                    sx={{ mb: 2, fontFamily: 'Ubuntu, sans-serif' }}
                    InputProps={{ style: { fontFamily: 'Ubuntu, sans-serif' } }}
                />
            )}

            {['Split ( Separator )'].includes(operation) && (
                <TextField
                    label="Separator"
                    fullWidth
                    value={separator}
                    onChange={(e) => setSeparator(e.target.value)}
                    sx={{ mb: 2, fontFamily: 'Ubuntu, sans-serif' }}
                    InputProps={{ style: { fontFamily: 'Ubuntu, sans-serif' } }}
                />
            )}

            {['Repeat ( Count )'].includes(operation) && (
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

export default WordSmith;