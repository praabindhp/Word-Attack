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

const WordAttack = () => {
    const [input, setInput] = useState('');
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
        '3': 'Capitalizes The First Letter Of Each Word In The Input',
        '4': 'Gets The Character At The Specified Index',
        '5': 'Gets The Substring From The Start Index To The End Index',
        '6': 'Slices The Input From The Start Index To The End Index',
        '7': 'Trims Whitespace From Both Ends Of The Input',
        '8': 'Splits The Input By The Specified Separator And Joins With Commas',
        '9': 'Replaces The Search Value With The Replace Value In The Input',
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
                result = input.charAt(0).toUpperCase() + input.slice(1);
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
            default:
                result = input;
        }
        setOutput(result);
        setSuccessAlert(true);
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
        <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 5 }}>
            <Typography variant="h4" component="div" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                Word Smith
            </Typography>
            <TextField
                label="Enter Your Input Here"
                multiline
                fullWidth
                rows={4}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                sx={{ mb: 2 }}
            />

            <TextField
                select
                label="Select Operation"
                fullWidth
                value={operation}
                onChange={handleOperationChange}
                sx={{ mb: 2 }}
                SelectProps={{
                    MenuProps: {
                        PaperProps: {
                            style: {
                                textAlign: 'center',
                            },
                        },
                    },
                }}
            >
                <MenuItem value="1">To Upper Case</MenuItem>
                <MenuItem value="2">To Lower Case</MenuItem>
                <MenuItem value="3">Capitalize First Letter</MenuItem>
                <MenuItem value="4">Character At Index</MenuItem>
                <MenuItem value="5">Substring ( Start, End )</MenuItem>
                <MenuItem value="6">Slice ( Start, End )</MenuItem>
                <MenuItem value="7">Trim</MenuItem>
                <MenuItem value="8">Split ( Separator )</MenuItem>
                <MenuItem value="9">Replace ( Search Value, New Value )</MenuItem>
                <MenuItem value="10">Includes Search String</MenuItem>
                <MenuItem value="11">Index Of ( Search Value )</MenuItem>
                <MenuItem value="12">Last Index Of ( Search Value )</MenuItem>
                <MenuItem value="13">Repeat ( Count )</MenuItem>
                <MenuItem value="14">Starts With ( Search String )</MenuItem>
                <MenuItem value="15">Ends With ( Search String )</MenuItem>
                <MenuItem value="16">Reverse String</MenuItem>
                <MenuItem value="17">Count Characters</MenuItem>
                <MenuItem value="18">Count Words</MenuItem>
                <MenuItem value="19">Remove Vowels</MenuItem>
                <MenuItem value="20">Randomize Characters</MenuItem>
            </TextField>

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
                            sx={{ mb: 2 }}
                        />
                    )}
                    {['5', '6'].includes(operation) && (
                        <>
                            <TextField
                                label="Start Index"
                                fullWidth
                                value={startIndex}
                                onChange={(e) => setStartIndex(e.target.value)}
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                label="End Index"
                                fullWidth
                                value={endIndex}
                                onChange={(e) => setEndIndex(e.target.value)}
                                sx={{ mb: 2 }}
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
                    sx={{ mb: 2 }}
                />
            )}

            {['9'].includes(operation) && (
                <TextField
                    label="Replace Value"
                    fullWidth
                    value={replaceValue}
                    onChange={(e) => setReplaceValue(e.target.value)}
                    sx={{ mb: 2 }}
                />
            )}

            {['8'].includes(operation) && (
                <TextField
                    label="Separator"
                    fullWidth
                    value={separator}
                    onChange={(e) => setSeparator(e.target.value)}
                    sx={{ mb: 2 }}
                />
            )}

            {['13'].includes(operation) && (
                <TextField
                    label="Repeat Count"
                    fullWidth
                    value={repeatCount}
                    onChange={(e) => setRepeatCount(e.target.value)}
                    sx={{ mb: 2 }}
                />
            )}

            <Button variant="contained" onClick={handleGenerate} sx={{ mt: 2, mb: 2 }} startIcon={<AutoAwesomeIcon />}>
                Generate
            </Button>

            <TextField
                label="Output"
                multiline
                fullWidth
                rows={4}
                value={output}
                onChange={(e) => setOutput(e.target.value)}
                sx={{ mb: 2 }}
            />

            <Snackbar
                open={successAlert}
                autoHideDuration={3000}
                onClose={handleCloseAlert}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
                    Operation Performed Successfully
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default WordAttack;