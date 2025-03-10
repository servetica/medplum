/*
 * This is a generated file
 * Do not edit manually.
 */

import { CodeableConcept } from './CodeableConcept';
import { Duration } from './Duration';
import { Extension } from './Extension';
import { Period } from './Period';
import { Range } from './Range';

/**
 * Specifies an event that may occur multiple times. Timing schedules are
 * used to record when things are planned, expected or requested to
 * occur. The most common usage is in dosage instructions for
 * medications. They are also used when planning care of various kinds,
 * and may be used for reporting the schedule to which past regular
 * activities were carried out.
 */
export interface Timing {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Identifies specific times when the event occurs.
   */
  event?: string[];

  /**
   * A set of rules that describe when the event is scheduled.
   */
  repeat?: TimingRepeat;

  /**
   * A code for the timing schedule (or just text in code.text). Some codes
   * such as BID are ubiquitous, but many institutions define their own
   * additional codes. If a code is provided, the code is understood to be
   * a complete statement of whatever is specified in the structured timing
   * data, and either the code or the data may be used to interpret the
   * Timing, with the exception that .repeat.bounds still applies over the
   * code (and is not contained in the code).
   */
  code?: CodeableConcept;
}

/**
 * A set of rules that describe when the event is scheduled.
 */
export interface TimingRepeat {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * Either a duration for the length of the timing schedule, a range of
   * possible length, or outer bounds for start and/or end limits of the
   * timing schedule.
   */
  boundsDuration?: Duration;

  /**
   * Either a duration for the length of the timing schedule, a range of
   * possible length, or outer bounds for start and/or end limits of the
   * timing schedule.
   */
  boundsRange?: Range;

  /**
   * Either a duration for the length of the timing schedule, a range of
   * possible length, or outer bounds for start and/or end limits of the
   * timing schedule.
   */
  boundsPeriod?: Period;

  /**
   * A total count of the desired number of repetitions across the duration
   * of the entire timing specification. If countMax is present, this
   * element indicates the lower bound of the allowed range of count
   * values.
   */
  count?: number;

  /**
   * If present, indicates that the count is a range - so to perform the
   * action between [count] and [countMax] times.
   */
  countMax?: number;

  /**
   * How long this thing happens for when it happens. If durationMax is
   * present, this element indicates the lower bound of the allowed range
   * of the duration.
   */
  duration?: number;

  /**
   * If present, indicates that the duration is a range - so to perform the
   * action between [duration] and [durationMax] time length.
   */
  durationMax?: number;

  /**
   * The units of time for the duration, in UCUM units.
   */
  durationUnit?: 's' | 'min' | 'h' | 'd' | 'wk' | 'mo' | 'a';

  /**
   * The number of times to repeat the action within the specified period.
   * If frequencyMax is present, this element indicates the lower bound of
   * the allowed range of the frequency.
   */
  frequency?: number;

  /**
   * If present, indicates that the frequency is a range - so to repeat
   * between [frequency] and [frequencyMax] times within the period or
   * period range.
   */
  frequencyMax?: number;

  /**
   * Indicates the duration of time over which repetitions are to occur;
   * e.g. to express &quot;3 times per day&quot;, 3 would be the frequency and &quot;1
   * day&quot; would be the period. If periodMax is present, this element
   * indicates the lower bound of the allowed range of the period length.
   */
  period?: number;

  /**
   * If present, indicates that the period is a range from [period] to
   * [periodMax], allowing expressing concepts such as &quot;do this once every
   * 3-5 days.
   */
  periodMax?: number;

  /**
   * The units of time for the period in UCUM units.
   */
  periodUnit?: 's' | 'min' | 'h' | 'd' | 'wk' | 'mo' | 'a';

  /**
   * If one or more days of week is provided, then the action happens only
   * on the specified day(s).
   */
  dayOfWeek?: ('mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun')[];

  /**
   * Specified time of day for action to take place.
   */
  timeOfDay?: string[];

  /**
   * An approximate time period during the day, potentially linked to an
   * event of daily living that indicates when the action should occur.
   */
  when?: ('MORN' | 'MORN.early' | 'MORN.late' | 'NOON' | 'AFT' | 'AFT.early' | 'AFT.late' | 'EVE' | 'EVE.early' |
      'EVE.late' | 'NIGHT' | 'PHS' | 'HS' | 'WAKE' | 'C' | 'CM' | 'CD' | 'CV' | 'AC' | 'ACM' | 'ACD' | 'ACV' | 'PC' | 'PCM'
      | 'PCD' | 'PCV')[];

  /**
   * The number of minutes from the event. If the event code does not
   * indicate whether the minutes is before or after the event, then the
   * offset is assumed to be after the event.
   */
  offset?: number;
}

/**
 * Either a duration for the length of the timing schedule, a range of
 * possible length, or outer bounds for start and/or end limits of the
 * timing schedule.
 */
export type TimingRepeatBounds = Duration | Period | Range;
